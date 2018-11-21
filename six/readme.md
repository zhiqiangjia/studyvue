
## 组件详解

### 组件创建
compoment1.html
```
Vue.component(
    'my-component',
    {
        //选项
        template: '..'
    }
);
```

### 局部注册组件
component2.html

```
var local = {

}
new Vue({
    el: '#app',
    components:{
        mycomponent: local
    }
});

```

### 组件中data, methods方法使用

```
Vue.component(
    'componentName',
    {
        template    : 'html内容',
        data: function() {
            return {
                //
            }
        }

    }
);

// 其中data 必须是方法, 必须带有return语句
```

### props传递数据

```

```