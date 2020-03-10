<template>
  <div>
      <router-view></router-view>
      <tabel></tabel>
  </div>
</template>

<script>
import tabel from '@/components/Tabel/index.vue'
export default {
    name:'mine',
  components:{
     tabel 
  }
}
</script>

<style>

</style>