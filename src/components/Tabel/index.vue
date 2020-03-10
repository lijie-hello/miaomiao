<template>
  <div class="tabel">
    <ul>
      <router-link
        v-for="(item,index) in list"
        tag="li"
        :key="index"
        :to="item.path"
        :class="{'active':index == indexCount}"
        @click.native="tabClick(index)"
      >{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabel",
  data() {
    return {
      indexCount: 0,
      list: [
        { name: "电影", path: "/cinema" },
        { name: "影剧", path: "/movie" },
        { name: "我的", path: "/mine" }
      ]
    };
  },
  methods: {
    tabClick(index) {
      console.log(index);
      this.indexCount = index;
    }
  },
  created() {
    console.log(this.$route.name);
    if (this.$route.name == "cinema") {
      this.indexCount = 0;
    } else if (this.$route.name == "movie") {
      this.indexCount = 1;
    }else if(this.$route.name == "mine"){
this.indexCount = 2;
    }
  }
};
</script>

<style lang="less" scoped>
.tabel {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  ul {
    display: flex;
    border-top: 1px #ddd solid;
    width: 100%;
    li {
      flex: 1;
      text-align: center;
      line-height: 40px;
    }
    .active {
      background: orangered;
      color: #fff;
    }
  }
}
</style>>

