# uniapp 封装方法
## toast  
- 封装showToast 统一应用showToast风格
- 参数：title标题名
- 返回一个prmoise，toast消失后resolve 
 参数|说明|类型|默认值
 ---|---|---|---
 title|显示内容|String|——

``` javascript
await this.$utils.toast.success(title)             
await this.$utils.toast.error(title)
```

## showLoading  
- 封装showLoading mask统一为true，
- 更新storage 用于hideLoading判断当前状态
- 参数：title标题名

 参数|说明|类型|默认值
 ---|---|---|---
 title|显示内容|String|——

``` javascript
this.$utils.uni.showLoading(title)             
```

## hideLoading  
- 封装hideLoading  
- 判断当前localstorage中的showLoading状态，若为true 则执行关闭，若为false则不执行

``` javascript
this.$utils.uni.hideLoading()             
```

## navigateTo redirectTo reLaunch
- 封装navigateTo redirectTo reLaunch
- 为避免因拼接参数导致意料之外的错误。
- 返回一个 Promise对象  navigateTo方式 resolve返回下个页面对象

``` javascript
this.$utils.uni.navigateTo("pages/index/index",{a:'a'}) 
this.$utils.uni.redirectTo("pages/index/index",{a:'a'})             
this.$utils.uni.reLaunch("pages/index/index",{a:'a'})             
```


## navigateToWebView
- 打开一个新的webview页面。 
``` javascript
this.$utils.uni.navigateToWebView() 
传递给webview页面的url，title，参考moon-web-view页面说明 
```
