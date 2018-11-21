
### 内容

主要介绍vue 的class样式和内联style样式

#### class 使用方式

```
// 单样式类型
:class="{ 'classname': boolean}"
:class="classVariable"


data:{
classVariable : 'classname'
}


// 多样式类型
:class="[classVariable1, classVariable2]">
data:{
classVariable1 : 'class1',
classVariable2: 'class2'
}

```

#### compoment 使用


#### style 使用方式

```
:style="{'attr':attrval,}"

data:{
    attrval : 'value'
}

```