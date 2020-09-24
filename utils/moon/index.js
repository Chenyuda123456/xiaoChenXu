/**
 * @description  从指定的vnode中查找ref为name的子孙vnode
 * @author 闰月飞鸟
 * @param {vm}  指定开始查找的vnode
 * @param {name}  待查vnode的ref名称
 */
export const getVnodeByRef = (vm, name) => {
	let result = '';
	if (vm.$refs[name]) result = vm.$refs[name];
	else {
		let children = vm.$children;
		if (children.length > 0) {
			children.some(v => {
				if (v.$refs[name]) {
					result = v.$refs[name];
				} else {
					result = getRef(v, name);
				}
				if (result && result != {}) {
					return true;
				} else result = '';
			});
		}
	}
	return result;
}

/**
 * @description   将原始树数据格式化成树形数据
 * @author 闰月飞鸟
 * @param {list} 原始树数据
 * @param { id = 'id', parentId = 'parentId', childrenName = "children" } 树数据结构的构建字段名称
 * @param {rootId}   手动指定根节点的ID，若为falsely，则自动推算出根节点  
 */
export const getTreeData = (list, {
	id = 'id',
	parentId = 'parentId',
	childrenName = "children"
}, rootId = '') => {
	//数据格式检查，若发现parentId等于Id，则报错。
	let checkFlag = list.some((o, i) => {
		if (o[id] == o[parentId]) {
			toast.error(`第${i + 1}个数据格式不正确，Id不能和parentId相同`)
			return true
		} else return false
	})
	if (checkFlag) return list
	//获取根节点数组 ，当指定rootId则以routId为根节点开始遍历出树数据，否则自行推算出根节点
	let roots = list.filter(function(o) {
		if (rootId) {
			if (o[id] === rootId) return true;
			else return false;
		} else
			return !list.find(function(i) {
				return o[parentId] == i[id]
			});
	});

	function fetch(root, arr) {
		let childList = arr.filter(value => {
			return value[parentId] == root[id];
		});
		root[childrenName] = childList;
		childList.forEach(v => {
			fetch(v, arr);
		});
	}
	//根据根节点格式化出树
	roots.forEach(v => {
		fetch(v, list);
	});
	return roots;
}
