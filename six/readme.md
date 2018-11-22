
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
props 定义是： 父组件包含子组件，父组件向子组件传递信息的过程，是用的props

传输的数据类型
- 字符串数据 (普通模式)
- 对象 (通过 v-bind)

```
# 父级属性定义

<componentName attrname="">

 Vue.component(
            'mycomponent',
            {   
                // 传递
                props: ['warningText', 'message', 'param1'],
                ..
            }
        );


':attributeName=""' :代表通过v-bind来动态绑定props
通过v-bind;是支持传递对象，数组，布尔,数字；
```