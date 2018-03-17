### 防篡改对象
|对象分类|添加属性|修改属性|删除属性|判断方法|使用方法|
|:--:|:--:|:--:|:--:|:--:|:--:|
|不可扩展|❌|☑️|☑️|Object.istExtensible()|Object.preventExtensions()|
|密封|❌|☑️|❌|Object.isSealed()|Object.seal()|
|冻结|❌|❌|❌|Object.isFrozen()|Object.freeze()|