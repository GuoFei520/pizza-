<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- 添加pizza -->
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <td>{{item.name}}</td>
                    <td>
                        <button @click="deleteData(item)" class="btn-outline-danger btn-sm">&times;</button>
                    </td>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NewPizza from "./NewPizza.vue";
    export default {
        data(){
            return{
                getMenuItems:[]
            }
        },
        components:{
            'app-new-pizza':NewPizza
        },
        created(){
            fetch("https://wd6774888403aqsjiu.wilddogio.com/menu.json")
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data);
                let menuArray = []
                for(let key in data) {
                    // console.log(data[key])
                    data[key].id=key
                    menuArray.push(data[key])
                }
                this.getMenuItems = menuArray
                
            })
        },
        methods:{
            deleteData(item){
                fetch("https://wd6774888403aqsjiu.wilddogio.com/menu/" + item.id+"/.json",{
                    method:"DELETE",
                    headers:{
                        'Content-type':'application/json'
                    }
                })
                .then( res =>  res.json())
                .then( data => this.$router.push({name:"menulink"}))
                .catch( err => console.log(err))
            }
        }
    }
</script>