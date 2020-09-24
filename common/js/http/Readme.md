# 依据http接口，配置项目http请求
- baseUrl 全局配置$config中的baseUrl
- 请求拦截中，将token存入header中。并将参数中每个属性值的收尾空格去掉。
- 响应拦截中，依据请求的stateCode值返回处理信息，并直接返回服务器返回的数据response.data

