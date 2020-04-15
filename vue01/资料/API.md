1. 数据类型声明与定义
    1. var newList = [];
    2. var obj = {}
    3. var str = ""
1. 
 <a href="" @click.prevent="del3(item.id)">删除</a>
2. 
<tr v-for="item in search2(keywords)" :key="item.id">
2. 遍历 list.some,this.list.splice(i,1)；
 del:function (id) {
                this.list.some(
                    (item,i) => {
                        if(item.id == id){//虽然报红色，但是运行ok
                        alert(id+'---'+item.id+'-----'+i);
                        this.list.splice(i,1);
                        return true;

                     }
                    }//虽然报红色，但是运行ok
                )},
3.
this.list.push(car);   
4.
var that = this;
5. return true; 看《onclick之return方法》
6.
item.name.indexOf(keywords);
indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
7. 遍历
 this.list.forEach(
                    item => {
                        if(item.name.indexOf(keywords) != -1){
                            newList.push(item);
                }
                }
                );