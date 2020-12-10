<template>
<div class="footer">
   <div class="cot">
      <div class="left">
         <img src="../assets/img/index/erm.jpg" />
      </div>
      <div class="right">
          <ul class="cate">
            <li>网站首页</li>
            <li>关于我们</li>
            <li>服务范围</li>
            <li>生产实力</li>
            <li>人才招聘</li>
            <li>联系我们</li>
          </ul>
          <div class="comp">江苏庆亚电子科技有限公司</div>
          <div class="adderss">
            <p>联系地址：江苏省徐州市铜山高新技术开发区中国安全谷#C6栋     企业邮箱：785069855@qq.com</p>
            <p>联系电话：19952121879             公司传真：0516-66625558</p>
          </div>
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
    overflow: hidden;
    .left{
      float: left;
    }
    .right{
      float: right;
      padding: 45px 0 0 0;
      box-sizing: border-box;
      overflow: hidden;
      .cate{
        overflow: hidden;
        li{
          float: left;
          padding: 0 50px;
          box-sizing: border-box;
          border-left: 1px solid #555555;
          font-size: 16px;
	        color: #848585;
        }
        :first-child{
          padding: 0 50px 0 0;
          border-left: none;
        }
        :last-child{
          padding: 0 0 0 50px;
        }        
      }
      .comp{
        font-size: 18px;
	      color: #ffffff;
        line-height: 72px;
        border-bottom: 1px solid #555555;
        text-align: left;
        padding: 19px 0 0 0;
        box-sizing: border-box;
        position: relative;
        &:after{
        display: block;
        width: 72px;
	      height: 3px;
	      background-color: #1e579d;
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        z-index: 55;
        }
      }
      .adderss{
        font-size: 16px;
	      color: #848585;
        text-align: left;
        padding: 20px 0; 
        box-sizing: border-box;
        :first-child{
              padding: 20px 0;
              box-sizing: border-box;
        }
      }
      
    }

  }
</style>
