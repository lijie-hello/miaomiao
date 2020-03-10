<template>
  <div class="reying">
      <div class="item">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583871335223&di=b381eaf75d9d5ecca3804022b0d4c34c&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1706%2F1010-1F60QP052.jpg" alt="">
        <h3>无名之辈</h3>
        <p>观众评<span>9.2</span></p>
        <p>主演:</p>
        <p>今天55家电鱼</p>
        <button>购票</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .reying{
   .item{
     position: relative;
     overflow: hidden;
    margin-top: 15px;
    padding: 0 15px;
     img{
       float: left;
       width: 100px;
       height: 120px;
       margin-right: 15px;
     }
     p{
       color: #777;
       font-size: 12px;
       margin-top: 10px;
     }
     button{
       position: absolute;
       right: 10px;
       top: 50%;
       transform: translateY(-50%);
       background: orangered;
       padding: 5px 10px;
       border-radius: 5px;
       cursor:pointer ;
       color: #fff;
     }
   }
 }
</style>