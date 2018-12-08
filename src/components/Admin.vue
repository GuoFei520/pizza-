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
                <tbody>
                    <td>榴莲</td>
                    <td>
                        <button class="btn-outline-danger btn-sm">&times;</button>
                    </td>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import NewPizza from "./NewPizza.vue";
    export default {
        components:{
            'app-new-pizza':NewPizza
        }
    }
</script>