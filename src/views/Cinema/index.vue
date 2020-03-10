<template>
  <div class="cinema">
      <ul>
        <router-link v-for="(item,index) in list" :key="index"
        :to="item.path"
        tag="li"
        >{{item.name}}</router-link>
      </ul>
      <router-view></router-view>
      <tabel></tabel>
  </div>
</template>

<script>
import tabel from '@/components/Tabel/index.vue'
export default {
    name:'cinema',
  components:{
     tabel 
  },
  data(){
    return{
      list:[
        {name:'大作',path:'/cinema/city'},
        {name:'正在热映',path:'/cinema/reying'},
        {name:'即将上映',path:'/cinema/shangying'},
        {name:'搜索',path:'/cinema/soushuo'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.cinema{
  height: 100%;
  ul{
    display: flex;
    border-bottom: 1px #ddd solid;
    li{
      flex: 1;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>>

