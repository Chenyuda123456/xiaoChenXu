# 外部方法
## getUUID  
- 随机生成一串uuid， 可用于标记dom
``` javascript
this.$utils.extra.getUUID()
```

## idCardValidate  
- 身份证号码验证

 参数名|说明|类型|默认值
 ---|---|---|---
 idcard|待验证的号码|String|—— 
``` javascript
this.$utils.extra.idCardValidate(idcard)
```
## phoneValidate  
- 手机号码验证  
 
 参数名|说明|类型|默认值
 ---|---|---|---
 phone|手机号码验证|String|—— 
- 返回： Boolean
``` javascript
this.$utils.extra.phoneValidate(idcard)
```