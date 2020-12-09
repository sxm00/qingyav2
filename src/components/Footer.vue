<template>
<div class="footer">
   <div class="cot">
     <div class="item">
       <div class="tit">联系我们/CONTACT US</div>
       <ul class="text">
         <li>联系电话：19952121879</li>
         <li>公司传真：0516-66625558</li>
         <li>企业邮箱：785069855@qq.com</li>
         <li>联系地址：徐州高新技术产业开发区第二工业园<br/>银山东麓漓江路南侧C6-1-103</li>
       </ul>
     </div>
     <div class="item">
<!--       <div class="tit">关注我们/PAY ATTENTION TO US</div>-->
       <ul class="text">
         <li>

         </li>
       </ul>
     </div>

   </div>
</div>
</template>

<script>
    export default {
        components: {
            // Logo,
            name:"Footer"
        },
        data() {
            return {


            };

        },

    }
</script>

<style lang="scss" scoped>
  .cot{
    width: 1200px;
    margin: 0 auto;
    padding: 100px 0 0 0;
    box-sizing: border-box;
    overflow: hidden;
    .item{
      width: 500px;
      float: left;
      .tit{
        font-size: 16px;
        letter-spacing: 2px;
        color: #ffffff;
        text-align: left;
        padding: 0 0 34px 0;
        box-sizing: border-box;
      }
      .text{
        li{
          text-align: left;
          font-size: 16px;
          line-height: 36px;
          letter-spacing: 1px;
          color: #ffffff;
        }

      }
    }

  }
</style>
