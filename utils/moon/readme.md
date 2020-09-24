 
# 自定义方法
## getVnodeByRef  
- 从指定的vnode中查找ref为name的子孙vnode
 
 参数名|说明|类型|默认值
 ---|---|---|---
 vm|指定开始查找的vnode，可以是当前vnode(this)|VNode|—— 
 name|待查vnode的ref名称|String|——
- 返回： 返回第一个被查到的Node
``` javascript
this.$utils.moon.getVnodeByRef(vm, name)
```

## getTreeData  
- 将原始树数据格式化成树形数据

 参数名|说明|类型|默认值
 ---|---|---|---
 list|原始树数据|Array|——
  {id  , parentId , childrenName }|树数据结构的构建字段名称|Object|{id = 'id', parentId = 'parentId', childrenName = "children"}
   rootId|手动指定根节点的ID，若为falsely，则自动推算出根节点  |String|""
- 返回： 树形数组
``` javascript
this.$utils.moon.getTreeData(list, {
	id :'id',
	parentId : 'parentId',
	childrenName :"children"
})
```
