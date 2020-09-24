#  moon-transition

### 作者：闰月飞鸟；时间：2020/03/14
### 开发目的
为relaunch replace页面或有必要的页面添加过渡动画。
### 设计思路
 封装uni-transition，设置mode-class默认值，添加动画开始事件
 
### 注意
 mode-class的zoom属性，可能会影响到部分涉及到计算边框的组件的渲染。 
 
### 平台适用性
App V3 |App 自定义| H5|小程序
---|---|---|---
√ |√|√| √

### Props 
参数 |说明|类型|可选值|默认值
---|---|---|---|---
modeClass |fade 渐隐渐出过渡   slide-top 由上至下过渡  slide-right 由右至左过渡  slide-bottom 由下至上过渡  slide-left 由左至右过渡  zoom-in 由小到大过渡  zoom-out 由大到小过渡 |Array|fade，slide-top，slide-right，slide-bottom，slide-left，zoom-in，zoom-out|[fade]
duration|动画延迟|Number|--|300

###  Slot
名称 |说明
---|---
—— |  自定义内容

###  Events
名称 |说明| 参数
---|---|---|
begin|动画开始|——
end|动画结束|——
 


 

