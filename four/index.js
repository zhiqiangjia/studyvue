var app = new Vue({
    el: '#app',
    data:{
        list:[
            {
                id:1,
                name: 'iphoneX',
                price: 6188,
                count: 1
            },
            {
                id:2,
                name: 'iPad pro',
                price: 5188,
                count: 1
            },
            {
                id:3,
                name: 'Macbook pro',
                price: 25188,
                count: 1
            }
        ]
    },
    methods:{
        handleRedule:function(index)
        {
            if (this.index[index].count ==1)
            {
                return;
            } 

            this.list[index].count --;
        },
        handleAdd:function(index)
        {
            this.list[index].count ++;
        },
        handleRemove:function(index) 
        {
            this.list.splice(index, 1);
        }
    },
    computed:{
        totolPrice:{
            get: function(){
                var total = 0;
                for (var index = 0; index < this.list.length; index++) {
                    total += this.list[index].price * this.list[index].count;

                }
                return total;
            }
        }
    }
});