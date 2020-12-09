<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner"> </div>
    <div class="pr-inner">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane class="nas"  name="first">
          <span slot="label">生产设备</span>
          <div class="sc-cot">
            <div class="list" >
            <div class="img">
              <img src="../assets/img/production/she1.png"/>
            </div>
            <p>GKG-G9全自动印刷机 </p>
          </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/she2.png"/>
              </div>
              <p>劲拓10温区无铅回流焊 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/she3.png"/>
              </div>
              <p>松下W2全自动贴片机 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/she4.png"/>
              </div>
              <p>Ax8200微焦点X-RAY透视检测设备 </p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label">生产环境</span>
          <div class="sc-cot">
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/huan1.png"/>
              </div>
              <p>DIP无尘操作车间 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/huan2.png"/>
              </div>
              <p>SMT无尘操作车间 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/huan3.png"/>
              </div>
              <p>入门除尘设备 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/huan4.png"/>
              </div>
              <p>SMT无尘操作车间 </p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label">生产规模</span>
          <div class="hj-cot">
            <div class="text">
              4000平方米新厂房交付投入使用，计划完成原有车间乔迁及升级改造；计划新增智能开关制造车间、无刷电机制造车间；
              计划增添国内最先进的模组机贴装生产线。力争打造成淮海经济区代工行业的“富士康”，实现公司与客户间共赢;
            </div>
            <div class="img">
              <img src="../assets/img/production/gbbg.png"/>
            </div>
            <div class="txt">
              <p>真心服务 诚挚待人 质量保证</p>
              <p>Sincere service welcome Quality assurance</p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
    <div class="home">
      <Footer></Footer>
    </div>
  </div>

</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
    export default {
        name: "production",
        components:{
            Header,
            Footer
        },
        data() {

            return {
                activeName:'first'
            };
        }
    }
</script>

<style lang="scss" scoped>
.container{
  background: #f5f5f5;
  .banner{
     width: 100%;
     height: 501px;
     background: url("../assets/img/production/scbg.png") no-repeat center;
     position: relative;
     z-index: 1;
   }
  .pr-inner{
    @include w12;
    .hj-cot{
      padding: 80px 20px 40px 20px;
      box-sizing: border-box;
      .text{
        font-size: 20px;
        line-height: 36px;
        letter-spacing: 1px;
        color: #333333;
        text-align: left;
        padding: 0 50px;
        box-sizing: border-box;
      }
      .img{
        margin: 50px auto;
      }
      .txt{
        line-height: 59px;
        letter-spacing: 2px;
        color: nth($colour,1);
        font-weight: bold;
        :first-child{
          font-size: 25px;
        }
        :nth-child(2){
          font-size: 21px;
        }
      }
    }
  }




}


</style>
<style lang="scss">
  .pr-inner{
    .el-tabs--border-card{
      box-shadow: none;
      border: none;
      .el-tabs__header{
        border: none!important;
      }
    }
    .el-tabs__content{
      padding: 0!important;
      .sc-cot{
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 30px 0;
        box-sizing: border-box;
        .list{
          width: 568px;
          background-color: #ffffff;
          border:1px solid #f5f5f5;
          overflow: hidden;
          cursor: pointer;
          float: left;
          margin-left: 20px;
          margin-bottom: 20px;
          &:hover{
            /*border:1px solid #0064cd;*/
          }
          .img{
            width: 568px;
            height: 407px;
            transition: all 0.3s;
            &:hover{
              transform: scale(1.05);
            }
          }
          p{
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 1px;
            color: #333333;
            line-height: 80px;
          }
        }
      }
    }
    .el-tabs__item{
      width: 400px!important;
      text-align: center;
      /*border: solid 1px #ced1e5!important;*/
      background: #fff;
      height: 100px;
      line-height: 100px;
      box-sizing: border-box;
      color: #030303!important;
      margin: 0!important;
      float: left!important;
      font-size: 30px;
      .nas{
        i{
          margin-right: 5px!important;
        }
      }
      &:first-child{
        margin: 0!important;
        border-right: none!important;
      }
      &:nth-child(2){
        border-right: none!important;
      }
      &:nth-child(3){
        border-right: none!important;
      }
    }
    .is-active{
      background-color: $theme-colour!important;
      color: #fff!important;
    }
  }
</style>
