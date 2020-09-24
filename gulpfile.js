const {
	series,
	parallel,
	src,
	dest,
	watch
} = require('gulp')
var fs = require('fs-extra')
let $ = require('gulp-load-plugins')();
/** 
 * @description 将pages,components目录下的所有page.json文件内容合并后,以template.page.json为构造模板，
 * 并将其中"pages-inject"位置，替换成合并后内容，最后重新生成pages.json
 */
function pageConcat() {
	let target = src('template.pages.json')
		.pipe($.rename('pages.json'));
	return src(['pages/first-page.json', 'pages/**/page.json', 'components/**/page.json'])
		.on('data', function(file) {
			var fileContents = file.contents.toString("utf-8");
			fileContents = fileContents.trim();
			fileContents += ','
			file.contents = Buffer.from(fileContents);
			return file
		})
		.pipe($.concat('temp.json'))
		.pipe($.replace(/,$/g, ''))
		.on('end', function(e) {
			if (!e) {
				//当项目中不存在first-page.json 和page.json时 将模板中的占位字符清除
				target.pipe($.replace(/\"pages-inject\"/g, ''))
					.pipe(dest('./'))
			}
		})
		.on('data', function(file) {
			let buffer = file.contents.toString("utf-8");
			let str = buffer.toString("utf-8")
				.trim();
			target.pipe($.replace(/\"pages-inject\"/g, str))
				.pipe(dest('./'))
		})
}
/** 
 * @description 将service目录modules目录中的所有js文件注册到service 目录下的index文件中，
 */
function importService() {
	let target = src('service/template.index.js')
		.pipe($.rename('index.js'));
	return src(['service/modules/*.js'])
		.on('data', function(file) {
			var fileName = file.relative.toString("utf-8")
				.replace('.js', "");
			let str =
				`
				import * as ${fileName} from './modules/${file.relative}'
				service.${fileName}=${fileName}
				`
			file.contents = Buffer.from(str);
			return file
		})
		.pipe($.concat('index.js'))
		.on('end', function(e) {
			if (!e) {
				//service/modules中不存在js文件时 将模板中的占位字符清除
				target.pipe($.replace(/\"service-inject\"/g, ''))
					.pipe(dest('service/'))
			}
		})
		.on('data', function(file) {
			let buffer = file.contents.toString("utf-8");
			let str = buffer.toString("utf-8")
				.trim();
			target.pipe($.replace(/\"service-inject\"/g, str))
				.pipe(dest('service/'))
		})
}

/** 
 * @description 将所有.md文件在H5模式下注册成全局组件
 */
function markdown() {
	let target = src('markdown/template.index.js')
		.pipe($.rename('index.js'));
	let menuTree = []
	/* 为每个节点生成唯一的id */
	function getUUID() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			return (c === 'x' ? (Math.random() * 16) | 0 : 'r&0x3' | '0x8')
				.toString(16)
		})
	}
	//依据nameList 生成层级树，返回一个数组，里面只有一个对象树
	function level(arr, nameList, standNameList) {
		if (nameList.length > 0) {
			let name = nameList[0]
			nameList = nameList.slice(1)
			arr.push({
				entity: {
					id: getUUID(),
					name,
					componentName: nameList.length == 0 ? standNameList.join("--") : '',
					icon: "el-icon-location",
					alias: name == 'devRules' ? "开发规范" : name == 'contents' ? '目录结构' : name
				},
				childs: []
			})
			level(arr[arr.length - 1].childs, nameList, standNameList)
		}
	}
	//依据 当前找到的md文件的相对路径 与menuList，生成多层级树
	function translate(arr, nameList, standNameList) {
		let _index = -1
		let flag = false
		flag = arr.some((value, index) => {
			if (nameList[0] == value.entity.name) {
				_index = index
				return true
			} else return false

		})
		if (flag) {
			nameList = nameList.slice(1)
			if (nameList.length > 0)
				translate(arr[_index].childs, nameList, standNameList)
			else {
				arr[_index].entity.componentName = standNameList.join("--")
			}
		} else {
			let levelArr = []
			level(levelArr, nameList, standNameList)
			arr.push(levelArr[0])
		}
	}

	return src(['./**/*.md', "!node_modules/**", "!htmlProject/**", "!unpackage/**"])
		.on('data', function(file) {
			let path = file.relative.replace(/\\/g, "/")
			let name = path.replace(/\//g, "--")
				.replace(/--readme.md|.md/i, "")
				.replace('目录结构', 'contents')
				.replace('开发规范', 'devRules')
			let arr = name.split('--')
			let arr2 = name.split('--')
			translate(menuTree, arr, arr2)
			let str = `Vue.component('${name}',()=>import('@/${path}')) `
			file.contents = Buffer.from(str)
			return file
		})
		.pipe($.concat('index.js'))
		.on('data', function(file) {
			var fileContents = file.contents.toString("utf-8");
			target.on('data', function(f) {
					let arr = "export const list =" + JSON.stringify(menuTree)
					var fs = f.contents.toString("utf-8");
					fs = fs.trim();
					let res = fs + '\n' + fileContents + '\n' + arr
					f.contents = Buffer.from(res);
					return f
				})
				.pipe(dest('markdown'))
			return file
		})
}

function copy_uni_ui(){
	fs.copy('node_modules/@dcloudio/uni-ui/lib', 'components/@dcloudio/uni-ui/lib', function(err) {
		if (err) return console.error(err);
		console.log("success!")
	})
	
}

function watchProcess(cb) {
	copy_uni_ui()
	watch(['**/*.md', "markdown/template.index.js", "!node_modules/**", "!htmlProject/**", "!unpackage/**"], {
		delay: 500,
		events: ['add', 'unlink', 'unlinkDir', 'ready']
	}, markdown);
	watch(['pages/first-page.json', 'pages/**/page.json', 'components/**/page.json', 'template.pages.json'], {
		delay: 500,
		events: ['all', 'ready']
	}, pageConcat);
	watch(['service/modules/*.js', "service/template.index.js"], {
		delay: 500,
		events: ['add', 'unlink', 'unlinkDir', 'ready']
	}, importService)
	cb()
}

exports.default = series(watchProcess);
