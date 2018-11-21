
## helloVue.html

vue 创建过程

```
 1. 创建vue实例
 var app = new Vue({
     // 选项
 });
 2. 选项挂载
 主要挂在DOM元素
 el: '#app'    = document.getElementById('app');

 3. 数据绑定 v-model='变量名'； vue数据绑定是双向绑定
 data: {
     //变量
 }
 4. 其中 {{变量}} 用于插入操作
```


## vueLifeCycle.html

vue 的生命周期过程
- created : 实例创建完成后调用
- mounted ： el挂载完成后调用 ; 获取el元素 mounted 后 this.$el
- beforeDestroy ： 实例销毁之前调用

## filters.html

使用到了 vue生命周期方法
- setInteral(function(){}, millisecond); 设置定时
- clearInteral(timer); 删除定时

- vue 过滤器使用，用于对{{param}} 数据的过滤
用法
```
{{param | filtername}} 
```

### event.html

- url 地址绑定使用
```
v-bind = :
# 例如：
v-bind:href =:href
v-bind:src = :src


```
- 点击事件绑定
```
v-on: = @
# 例如：
v-on:click  = @click

```

- 其他
```
vue 与 或 非
! 
&&
||
```