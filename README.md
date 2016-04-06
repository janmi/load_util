# load_util
loading 提示加载小工具

## 快速调用说明

#### 插入 loading
```
loadUtil.insert()
```

#### 显示 loading 
```
loadUtil.show()
```


#### 隐藏 loading
```
loadUtil.hide()
```

## 函数说明 isInDocument
使用 compareDocumentPosition 方法判断 loading DOM 是否被包含在 document 中（返回值为 16 ，代表被包含），如果存在则直接显示 loading，否则插入 loading

技术文档参考  [compareDocumentPosition](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/compareDocumentPosition) 

## 图片说明
loading 为矢量 svg 图片，可以修改为任意尺寸大小的图片，不会失真。