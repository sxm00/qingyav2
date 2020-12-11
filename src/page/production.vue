<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner"> </div>
    <div class="pr-inner">
      <div class="tit1">生产实景</div>
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane class="nas"  name="first">
          <span slot="label">SMT车间实景</span>
          <div class="sc-cot">
            <div class="list" >
            <div class="img">
              <img src="../assets/img/production/SMT-1.jpg"/>
            </div>
            <p>SMT恒温无尘车间一角 </p>
          </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/SMT-2.jpg"/>
              </div>
              <p>SMT恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/SMT-3.jpg"/>
              </div>
              <p>SMT恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/SMT-4.jpg"/>
              </div>
              <p>SMT恒温无尘车间一角 </p>
            </div>
             <div class="list" >
              <div class="img">
                <img src="../assets/img/production/SMT-5.jpg"/>
              </div>
              <p>SMT恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/SMT-6.jpg"/>
              </div>
              <p>SMT恒温无尘车间一角 </p>
            </div>
             <div class="list" >
              <div class="img">
                <img src="../assets/img/production/SMT-7.jpg"/>
              </div>
              <p>SMT恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/SMT-8.jpg"/>
              </div>
              <p>SMT恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/SMT-9.jpg"/>
              </div>
              <p>SMT恒温无尘车间一角 </p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label">DIP车间实景</span>
          <div class="sc-cot">
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/DIP-1.jpg"/>
              </div>
              <p>DIP恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/DIP-2.jpg"/>
              </div>
              <p>DIP恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/DIP-3.jpg"/>
              </div>
              <p>DIP恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/DIP-4.jpg"/>
              </div>
              <p>DIP恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/DIP-5.jpg"/>
              </div>
              <p>DIP恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/DIP-6.jpg"/>
              </div>
              <p>DIP恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/DIP-7.jpg"/>
              </div>
              <p>DIP恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/DIP-8.jpg"/>
              </div>
              <p>DIP恒温无尘车间一角 </p>
            </div>
            <div class="list" >
              <div class="img">
                <img src="../assets/img/production/DIP-9.jpg"/>
              </div>
              <p>DIP恒温无尘车间一角 </p>
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
  background: #ffffff;
  .banner{
     width: 100%;
     height: 620px;
     background: url("../assets/img/production/scbg.jpg") no-repeat center;
     position: relative;
     z-index: 1;
   }
  .pr-inner{
    @include w12;
  .tit1 {
    width: 270px;
    font-size: 36px;
    letter-spacing: 5px;
    color: nth($colour, 1);
    padding: 36px 0 28px 0;
    box-sizing: border-box;
    position: relative;
    margin: 0 auto 40px;

    &:after {
      display: block;
      width: 85px;
      height: 2px;
      background: nth($colour, 6);
      content: "";
      position: absolute;
      left: 34%;
      top: 105px;
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
          width: 396px;
          // background-color: #ffffff;
          overflow: hidden;
          float: left;
          .img{
            width: 378px;
            height: 260px;
          }
          p{
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
            color: #544f4f;
            line-height: 80px;
          }
        }
      }
    }
    .el-tabs--border-card>.el-tabs__header{
      background: #fff!important;
    }
    .el-tabs__nav{
      left: 230px!important;
    }
    .el-tabs__item{
      width: 370px!important;
      text-align: center;
      background: #e0e0e0;
      height: 70px;
      line-height: 70px;
      box-sizing: border-box;
      color: #544f4f!important;
      margin: 0 auto!important;
      float: left!important;
      font-size: 16px;
      .nas{

      }
    }
    .is-active{
      background-color: #1f5ba3!important;
      color: #fff!important;
    }
  }
</style>
