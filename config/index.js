//公共配置，可以在development与production中覆盖
let config = {}

const files = require.context('/', false, /\.js/)
files.keys().some(item => {
	if (item.includes(process.env.NODE_ENV))
		config = { ...config,
			...files(item).default
		}
})
export default config
