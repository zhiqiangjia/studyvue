## 内容介绍

计算属性介绍，以及基本使用， 缓存


```
## 用法 1：
 computed: {
     // default方法
     attrname:function() {
         ..
     }
     
 }

 {{attrname}}

 等价于

 methods:{
     attrname:function() {
         ...
     }
 }

{{attrname()}}

## 用法2：
computed: {
    attrname:{

    }
}


computed 使用
```
