<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner"> </div>
    <div class="part1">
      <div class="tit1">联系我们</div>
      <div class="cot">
        <div class="boxs">
          <div class="item w-1">
            <p>江苏庆亚电子科技有限公司</p>
            <div class="text">
              主营业务：电子电路板开发、抄板、SMT、DIP、PCB板焊接加工、
电子产品OEM代工、电子变压器生产制造、 成品线束旗形端子加
工制造等。
            </div>
          </div>
          <div class="item w-2">
            <p>公司地址：江苏省徐州市铜山高新技术开发区中国安全谷#C6栋</p>
            <p>公司邮箱：785069855@qq.com</p>
            <p>联系电话：19952121879</p>
            <p>公司传真：0516-66625558</p>
          </div>
          <div class="item">
            <img src="../assets/img/about/erms.png"/>
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
                    {
                        pName: 'MapType',//卫星与地图切换
                        defaultType: 0,
                        showTraffic:true,//实时交通图层
                    },
                    {
                        pName:'OverView',
                        //isOpen:true//鹰眼是否打开
                    },
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
    height: 620px;
    background: url("../assets/img/about/cont.jpg") no-repeat center;
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

    .cot{
      @include w12;
      overflow: hidden;
      margin: 50px auto 100px;
      .boxs{
        @include w12;
        margin-bottom: 80px;
        overflow: hidden;
        position: relative;
        border: solid 2px #e0e0e0;
        padding: 28px 0 28px 53px;
        box-sizing: border-box;
        .item{
          float: left;
          font-size: 16px;
	        color: #544f4f;  
          text-align: left;   
          line-height: 26px;       
          &.w-1{
            width: 457px;    
            padding: 0 10px;
            box-sizing: border-box;     
            border-right: 2px solid #e0e0e0; 
            p{
              font-size: 20px;
              font-weight: bold;
              line-height: 46px;
            }
          }
          &.w-2{
            width: 477px;   
            padding: 13px 10px 0;
            box-sizing: border-box;     
            border-right: 2px solid #e0e0e0;   
            line-height: 26px;          
          }
          img{
            margin: 0 0 0 40px;
          }
        }
      }
      .amap-wrapper{
        height: 400px;
      }

    }
  }

</style>
