**插件使用说明**
- 开源插件作者luch-request,版本1.0.5（2019-12-12）
- 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
- 支持全局挂载
- 支持多个全局配置实例
- 支持自定义验证器
- 支持文件上传（如不使用可以删除class里upload 方法） 
- <font color='red'>新增download方法</font> 返回格式：成功时添加{data:{code:200,templateFile:...}} 。失败时data = { code: 500, msg:"文件下载失败"}
- 支持` typescript `、` javascript ` 版本(如果不使用ts版本，则可以把luch-request-ts 文件夹删除)
- url也可设置成绝对路径
**Example**
---
创建实例  
 
``` javascript 
const http = new Request();
```

执行` GET `请求

```  
http.get('/user/login', {params: {userName: 'name', password: '123456'}}).then(res => {

}).catch(err => {

})
// 局部修改配置，局部配置优先级高于全局配置 

http.get('/user/login', {
    params: {userName: 'name', password: '123456'}, /* 会加在url上 */
    header: {}, /* 会覆盖全局header */
    dataType: 'json',
    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
    custom: {auth: true}, // 可以加一些自定义参数，在拦截器等地方使用。比如这里我加了一个auth，可在拦截器里拿到，如果true就传token
    // #ifndef MP-ALIPAY || APP-PLUS
    responseType: 'text',
    // #endif
    // #ifdef MP-ALIPAY
    timeout: 30000, // 仅支付宝小程序支持
    // #endif
    // #ifdef APP-PLUS
    sslVerify: true // 验证 ssl 证书 仅5+App安卓端支持（HBuilderX 2.3.3+）
    // #endif
}).then(res => {

}).catch(err => {

})
```
执行` POST `请求

```  
http.post('/user/login', {userName: 'name', password: '123456'} ).then(res => {

}).catch(err => {

})
// 局部修改配置，局部配置优先级高于全局配置
http.post('/user/login', {userName: 'name', password: '123456'}, {
    params: {}, /* 会加在url上 */
    header: {}, /* 会覆盖全局header */
    dataType: 'json',
    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
    custom: {auth: true}, // 可以加一些自定义参数，在拦截器等地方使用。比如这里我加了一个auth，可在拦截器里拿到，如果true就传token
    // #ifndef MP-ALIPAY || APP-PLUS
    responseType: 'text',
    // #endif
    // #ifdef MP-ALIPAY
    timeout: 30000, // 仅支付宝小程序支持
    // #endif
    // #ifdef APP-PLUS
    sslVerify: true // 验证 ssl 证书 仅5+App安卓端支持（HBuilderX 2.3.3+）
    // #endif
}).then(res => {

}).catch(err => {

})
```
执行` upload `请求

```  
http.upload('api/upload/img', {
    files: [], // 仅5+App支持
    fileType：'image/video/audio', // 仅支付宝小程序，且必填。
    filePath: '', // 要上传文件资源的路径。
    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
    custom: {auth: true}, // 可以加一些自定义参数，在拦截器等地方使用。比如这里我加了一个auth，可在拦截器里拿到，如果true就传token
    name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
    header: {},
    formData: {}, // HTTP 请求中其他额外的 form data
}).then(res => {
  
}).catch(err => {

})
```
**luch-request API**
--
```  
http.request({
     method: 'POST', // 请求方法必须大写
     url: '/user/12345',
     data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
     },
     params: { // 会拼接到url上
        token: '1111'
     },
    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
     custom: {} // 自定义参数
})

具体参数说明：[uni.uploadFile](https://uniapp.dcloud.io/api/request/network-file)
http.upload('api/upload/img', {
    files: [], // 仅5+App支持
    fileType：'image/video/audio', // 仅支付宝小程序，且必填。
    filePath: '', // 要上传文件资源的路径。
    name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
    header: {}, // 如填写，会覆盖全局header,
    custom: {} // 自定义参数
    formData: {}, // HTTP 请求中其他额外的 form data
})
```


请求方法别名 / 实例方法

``` 
http.request(config)
http.get(url[, config])
http.upload(url[, config])
http.delete(url[, data[, config]])
http.head(url[, data[, config]])
http.post(url[, data[, config]])
http.put(url[, data[, config]])
http.connect(url[, data[, config]])
http.options(url[, data[, config]])
http.trace(url[, data[, config]])
```

**全局请求配置**
--
``` 
{
      baseUrl: '',
      header: {
        'content-type': 'application/json;charset=UTF-8'
      },
      method: 'GET',
      dataType: 'json',
      // #ifndef MP-ALIPAY || APP-PLUS
      responseType: 'text',
      // #endif
    // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
      custom: {}, // 全局自定义参数默认值
      // #ifdef MP-ALIPAY
      timeout: 30000,
      // #endif
      // #ifdef APP-PLUS
      sslVerify: true
      // #endif
}
```


全局配置修改` setConfig `

``` 
/**
     * @description 修改全局默认配置
     * @param {Function}   
*/
http.setConfig((config) => { /* config 为默认全局配置*/
    config.baseUrl = 'http://www.bbb.cn'; /* 根域名 */
    config.header = {
        a: 1,
        b: 2
    }
    return config
})
```

自定义验证器` validateStatus `

``` 
/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
*/
http.validateStatus = (statusCode) => { // 默认
     return statusCode === 200
}

// 举个栗子
http.validateStatus = (statusCode) => {
   return statusCode && statusCode >= 200 && statusCode < 300
}
```

**拦截器**
--

在请求之前拦截

``` 
/**
 * @param { Function} cancel - 取消请求,调用cancel 会取消本次请求，但是该函数的catch() 仍会执行; 不会进入响应拦截器
 *
 * @param {String} text ['handle cancel'| any] - catch((err) => {}) err.errMsg === 'handle cancel'。非必传，默认'handle cancel'
 * @cancel {Object} config - catch((err) => {}) err.config === config; 非必传，默认为request拦截器修改之前的config
 * function cancel(text, config) {}
 */
http.interceptor.request((config, cancel) => { /* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
    config.header = {
        ...config.header,
        a: 1
    }
    // if (config.custom.auth) {
    //   config.header.token = 'token'
    // }
    if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
        cancel('token 不存在', config) //  把修改后的config传入，之后响应就可以拿到修改后的config。 如果调用了cancel但是不传修改后的config，则catch((err) => {}) err.config 为request拦截器修改之前的config
    }
    */
    return config;
})
```

在请求之后拦截

``` 
http.interceptor.response((response) => { /* 对响应成功做点什么 （statusCode === 200），必须return response*/
  //  if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
  //    return Promise.reject(response)
  //  }
 // if (response.config.custom.verification) { // 演示自定义参数的作用
  //   return response.data
  // }
  console.log(response)
  return response
}, (response) => { /*  对响应错误做点什么 （statusCode !== 200），必须return response*/
  console.log(response)
  return response
})
```
 
 