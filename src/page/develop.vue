<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">

        <swiper-slide class="slides">
          <img src="../assets/img/develop/s-bg1.jpg">
        </swiper-slide>
        <swiper-slide class="slides">
          <img src="../assets/img/develop/s-bg2.jpg">
        </swiper-slide>
        <!-- <swiper-slide class="slides">
          <img src="../assets/img/develop/s-bg3.png">
        </swiper-slide> -->
        <swiper-slide class="slides">
          <img src="../assets/img/develop/s-bg4.jpg">
        </swiper-slide>
        <swiper-slide class="slides">
          <img src="../assets/img/develop/s-bg5.jpg">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>

      </swiper>
    </div>
    <div class="de-inner">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane class="nas"  name="first">
          <span slot="label">外观设计</span>
          <div class="de-cot">
            <div class="item">
              <img src="../assets/img/develop/wai/a1.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/wai/a2.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/wai/a3.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/wai/a4.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/wai/a5.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/wai/a6.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/wai/a7.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/wai/a8.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/wai/a9.jpg"/>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label">结构设计</span>
          <div class="de-cot">
            <div class="item">
              <img src="../assets/img/develop/jie/jg1.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/jie/jg2.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/jie/jg3.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/jie/jg4.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/jie/jg5.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/jie/jg6.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/jie/jg7.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/jie/jg8.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/jie/jg9.jpg"/>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label">软件设计</span>
          <div class="de-cot">
            <div class="item">
              <img src="../assets/img/develop/r1.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/r2.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/r3.jpg"/>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label">硬件设计</span>
          <div class="de-cot">
            <div class="item">
              <img src="../assets/img/develop/ying/yj1.png"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/ying/yj2.png"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/ying/yj3.png"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/ying/yj4.png"/>
            </div>
  -->
            <div class="item">
              <img src="../assets/img/develop/ying/yj7.png"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/ying/yj8.png"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/ying/yj9.png"/>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label">APP设计</span>
          <div class="de-cot">
            <div class="item">
              <img src="../assets/img/develop/r4.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/r5.jpg"/>
            </div>
            <div class="item">
              <img src="../assets/img/develop/r6.jpg"/>
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
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
        name: "develop",
        components:{
            Header,
            Footer,
            swiper,
            swiperSlide
        },
        data(){
            return{
                swiperOption:{
                    // 参数选项,显示小点
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                    //循环
                    loop:true,
                    //每张播放时长3秒，自动播放
                    autoplay: true,
                    //滑动速度
                    speed:300,
                    // delay:1000

                },
                activeName:'first'
            }
        },
    }
</script>

<style lang="scss" scoped>
  .container{
    background: #f5f5f5;
  }
  .banner{
    overflow:hidden;
    width: 100%;
    height:600px;
    background :#ccc;
    .swiper-item{
      width:100%
    }
    .swiper-img{
      width:100%
    }
    .swiper-container {
               width: 100%;
             height: 600px;
         }
  }

.de-inner{
  @include w12;
 .de-cot{
   overflow: hidden;
   .item{
     width: 388px;
     height: 262px;
     float: left;
     margin: 10px 6px;
   }
 }
}
</style>

<style lang="scss">
  .de-inner{
    .el-tabs--border-card{
      box-shadow: none;
      border: none;
      .el-tabs__header{
        border: none!important;
      }
    }
    .el-tabs__content{
      padding: 0!important;
    }
    .el-tabs__item{
      width: 240px!important;
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
