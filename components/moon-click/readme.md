#  moon-click

### 作者：闰月飞鸟；时间：2020/05/14
### 开发目的
- 封装元素点击事件，避免元素重复点击触发事件。如button点击事件，按钮页面跳转等。
### 设计思路
- 通过设置lock，第一次点击后设置为true，延时500ms后变成false，按钮只有在为false时触发才有效果 。这样可以给页面切换，组件渲染留出时间
- 通过作用域插槽将lock返回给slot中具体的组件，

### 平台适用性
App V3 |App 自定义| H5|小程序
---|---|---|---
√ |√|x |√ 

###  Slot
名称 |说明
---|---
default | dom元素

### slot-scope
名称 |说明
---|---
lock | 当前点击状态

###  Events
名称 |说明| 参数
---|---|---|
click|点击事件|——
 
 ```
 <moon-click @click="onTap">
 	<template slot-scope="{lock}">
 		<view><button type="primary" :disabled="lock">ddd</button></view>
 	</template>
 </moon-click>
 
 <moon-click @click="onTap">
	<button slot-scope="{ lock }" type="primary" :disabled="lock">ddd</button>
 </moon-click>
 ```


 

