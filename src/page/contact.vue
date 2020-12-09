<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner">
      <div class="cot">
        <div class="box">
          <ul class="star">
            <li class="wow fadeInRight">
              <i class="iconfont">&#xe70b;</i>
            </li>
            <li>
              <i class="iconfont">&#xe70b;</i>
            </li>
            <li>
              <i class="iconfont">&#xe70b;</i>
            </li>
            <li>
              <i class="iconfont">&#xe70b;</i>
            </li>
            <li class="wow fadeInLeft">
              <i class="iconfont">&#xe70b;</i>
            </li>
          </ul>
          <div class="text wow fadeInLeft">
            以<span>质</span>取胜  以<span>诚</span>相待
          </div>
          <p class="txt1">TO FINE BUSINESSES HONEST QUALITY</p>
        </div>

      </div>
    </div>
    <div class="part1">
      <div class="tit1">联系我们</div>
      <div class="tit2">CONTACT US</div>
      <div class="cot">
        <div class="boxs">
          <div class="item w-3">
            <div class="tops"><i class="iconfont">&#xe651;</i></div>
             <p class="p1">地址Address</p>
             <p class="p2">徐州高新技术产业开发区第二工业园</p>
             <p class="p2">银山东麓漓江路南侧C6-1-103</p>
          </div>
          <div class="item">
            <div class="tops"><i class="iconfont">&#xe68d;</i></div>
            <p class="p1">电话Phone</p>
            <p class="p3">19952121879</p>
          </div>
          <div class="item">
            <div class="tops"><i class="iconfont">&#xe658;</i></div>
            <p class="p1">网址Website</p>
            <p class="p3">https://qingyakeji.com</p>
          </div>
          <div class="item">
            <div class="tops"><i class="iconfont">&#xe600;</i></div>
            <p class="p1">邮箱Mail</p>
            <p class="p3">785069855@qq.com</p>
          </div>
        </div>
        <div class="amap-wrapper">
          <el-amap class="amap-box" vid="map"
                   :zoom="zoom"
                   :center="center"
                   :plugin="plugin">
            <el-amap-marker vid="marker"
                            :position="center"
                            :label="label"
            >
            </el-amap-marker>
            <el-amap-circle  vid="circle"
                             :center="center"
                             :radius="radius"
                             fill-opacity="0.2"
                             strokeColor="#38f"
                             strokeOpacity="0.8"
                             strokeWeight="1"
                             fillColor="#38f"
            >
            </el-amap-circle>
          </el-amap>
        </div>
        <div class="txt">
          <p>真心服务 诚挚待人 质量保证</p>
          <p>Sincere service welcome Quality assurance</p>
        </div>
      </div>
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
        name: "contact",
        components:{
            Header,
            Footer
        },
        data(){
            let self=this;
            return{
                msg:'vue-amap demo',
                zoom:16,
                lng:0,
                lat:0,
                loaded:false,
                center:[117.167108,34.146914],
                label:{
                    content:'江苏庆亚电子科技有限公司',
                    offset:[10,12]
                },
                radius:100,
                plugin: [
                    {
                        pName: 'ToolBar',//工具条插件
                        position:'LB',
                    },
                    // {
                    //     pName: 'MapType',//卫星与地图切换
                    //     defaultType: 0,
                    //     showTraffic:true,//实时交通图层
                    // },
                    // {
                    //     pName:'OverView',
                    //     //isOpen:true//鹰眼是否打开
                    // },
                    {
                        pName:'Scale'
                    }
             /*       {
                        pName:'Geolocation',//定位插件
                        showMarker:true,
                        events: {
                            init(o) {
                                // o 是高德地图定位插件实例
                                o.getCurrentPosition((status, result) => {
                                    if (result && result.position) {
                                        self.lng = result.position.lng;
                                        self.lat = result.position.lat;
                                        self.center = [self.lng, self.lat];
                                        self.loaded = true;
                                    }
                                });
                            }
                        }
                    }*/
                ]
            }
        },
        methods:{
            addRadius(){
                this.radius+=10;
            }
        }
    }
</script>

<style lang="scss" scoped>
  .banner{
    width: 100%;
    height: 501px;
    background: url("../assets/img/production/conus.png") no-repeat center;
    .cot{
      @include w12;
      overflow: hidden;
      .box{
        float: right;
        margin: 160px 0 0 0;
        padding: 0 5px 0 0;
        box-sizing: border-box;
        .star{
          overflow: hidden;
          padding: 0 0 17px 140px;
          box-sizing: border-box;
          li{
            float: left;
            margin: 0 20px 0 0;
            i{
              color: nth($colour, 5);
              font-size: 26px;
            }
          }
        }
        .text{
          clear: both;
          width: 498px;
          height: 106px;
          font-size: 52px;
          line-height: 106px;
          letter-spacing: 2px;
          color: nth($colour, 5);
          border-bottom: 1px dashed nth($colour, 5);
          border-top: 1px dashed nth($colour, 5);
          span{
            color: #ff9900;
          }
        }
        .txt1{
          font-size: 20px;
          color: nth($colour, 5);
          padding: 20px 0 0 0;
          box-sizing: border-box;
        }
      }


    }
  }
  .part1{
    .tit1{
      width: 270px;
      font-size: 44px;
      font-weight: bold;
      letter-spacing: 5px;
      color: nth($colour,1);
      padding: 70px 0 28px 0;
      box-sizing: border-box;
      position: relative;
      margin: 0 auto;
      &:after{
        display: block;
        width: 85px;
        height: 2px;
        background: nth($colour,1);
        content: '';
        position: absolute;
        left: 34%;
        top: 136px;
      }
      &:before{
        display: none;
        width: 85px;
        height: 2px;
        background: nth($colour,2);
        content: '';
        position: absolute;
        right: 0;
        top: 128px;
      }
    }
    .tit2{
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #333333;
      padding: 0 0 20px 0;
      box-sizing: border-box;
    }
    .cot{
      @include w12;
      .boxs{
        overflow: hidden;
        position: relative;
        padding: 30px 0 50px 0;
        box-sizing: border-box;
        .item{
          width: 23%;
          float: left;
          &.w-3{
            width: 30%;
          }
          .tops{
            width: 60px;
            height: 60px;
            background: nth($colour,1);
            border-radius: 50%;
            margin: 0 auto;
            i{
              font-size: 36px;
              line-height: 60px;
              color: #ffffff;
            }
          }
          p{
            font-size: 21px;
            color: #333333;
          }
          .p1{
            line-height: 59px;
            letter-spacing: 2px;
            color: nth($colour,1);
            font-weight: bold;
          }
          .p2{
            line-height: 40px;
          }
          .p3{
            padding-top: 27px;
            box-sizing: border-box;
          }
        }
      }
      .amap-wrapper{
        height: 400px;
      }
      .txt{
        line-height: 45px;
        letter-spacing: 2px;
        color:nth($colour,1);
        font-weight: bold;
        padding: 40px 0;
        box-sizing: border-box;
        :first-child{
          font-size: 25px;
        }
        :nth-child(2){
          font-size: 21px;
        }
      }
    }
  }

</style>
