<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner"></div>
    <div class="part">
      <div class="tit1">服务项目</div>
      <div class="sports">
        <div class="list">
           <img src="../assets/img/service/icion/sc.png" />
           <!-- <img src="../assets/img/service/icion/r-sc.png" /> -->
           <p>市场分析</p>
        </div>
        <div>
         <div class="list" @click="showActive1(1)" :class="{active:currentClass==1}">
           <img v-show="active1 === 0" src="../assets/img/service/icion/wg.png" />
           <img v-show="active1 === 1" src="../assets/img/service/icion/r-wg.png" />
           <p>外观设计</p>
        </div>
        <div class="list" @click="showActive2(2)" :class="{active:currentClass==2}">
           <img v-show="active2 === 0" src="../assets/img/service/icion/jg.png" />
           <img v-show="active2 === 2" src="../assets/img/service/icion/r-jg.png" />
           <p>结构设计</p>
        </div>
        <div class="list" @click="showActive3(3)" :class="{active:currentClass==3}">
           <img v-show="active3 === 0" src="../assets/img/service/icion/ry.png" />
           <img v-show="active3 === 3" src="../assets/img/service/icion/r-ry.png" />
           <p>软硬件设计</p>
        </div>
        <div class="list" @click="showActive4(4)" :class="{active:currentClass==4}">
           <img v-show="active4 === 0" src="../assets/img/service/icion/zn.png" />
           <img v-show="active4 === 4" src="../assets/img/service/icion/r-zn.png" />
           <p>智能APP</p>
        </div>
        </div>
        <router-link to='/page/production'>
        <div class="list">
           <img src="../assets/img/service/icion/zz.png" />
           <!-- <img src="../assets/img/service/icion/r-zz.png" /> -->
           <p>制造中心</p>
        </div>   
        </router-link>                                    
      </div>
      <div class="tab">
        <div v-show="currentTab === 1" class="facade">
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/waiguan/wg1.jpg" />
                  <div class="tit">
                    <p>智能杀菌空气净化机</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/waiguan/wg2.jpg" />
                  <div class="tit">
                    <p>血氧仪</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/waiguan/wg3.jpg" />
                  <div class="tit">
                    <p>血压器</p>
                  </div>
                </div>
            </div>                        
          </div>
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/waiguan/wg4.jpg" />
                  <div class="tit">
                    <p>超声探头</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/waiguan/wg5.jpg" />
                  <div class="tit">
                    <p>白癜风治疗仪</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/waiguan/wg6.jpg" />
                  <div class="tit">
                    <p>语音呼叫器</p>
                  </div>
                </div>
            </div>                        
          </div>
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/waiguan/wg7.jpg" />
                  <div class="tit">
                    <p>语音呼叫设备</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/waiguan/wg8.jpg" />
                  <div class="tit">
                    <p>消防单兵设备</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/waiguan/wg9.jpg" />
                  <div class="tit">
                    <p>定时电蚊香</p>
                  </div>
                </div>
            </div>                        
          </div>                    
        </div>
        <div v-show="currentTab === 2" class="facade">
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/jiegou/jg1.jpg" />
                  <div class="tit">
                    <p>智能杀菌空气净化机</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/jiegou/jg2.jpg" />
                  <div class="tit">
                    <p>电源</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/jiegou/jg3.jpg" />
                  <div class="tit">
                    <p>语音呼叫器</p>
                  </div>
                </div>
            </div>                        
          </div>
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/jiegou/jg4.jpg" />
                  <div class="tit">
                    <p>白癜风治疗仪</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/jiegou/jg5.jpg" />
                  <div class="tit">
                    <p>雾灯警报器</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/jiegou/jg6.jpg" />
                  <div class="tit">
                    <p>额温枪</p>
                  </div>
                </div>
            </div>                        
          </div>
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/jiegou/jg7.jpg" />
                  <div class="tit">
                    <p>血氧仪</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/jiegou/jg8.jpg" />
                  <div class="tit">
                    <p>前列腺治疗仪</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/jiegou/jg9.jpg" />
                  <div class="tit">
                    <p>滚动系统</p>
                  </div>
                </div>
            </div>                        
          </div>                    
        </div>
        <div v-show="currentTab === 3" class="facade">
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/ruanjian/ry1.jpg" />
                  <div class="tit">
                    <p>PCB板2D图</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/ruanjian/ry2.jpg" />
                  <div class="tit">
                    <p>PCB板原理图</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/ruanjian/ry3.jpg" />
                  <div class="tit">
                    <p>PCB板3D图</p>
                  </div>
                </div>
            </div>                        
          </div>
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/ruanjian/ry4.jpg" />
                  <div class="tit">
                    <p>PCB板3D图</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/ruanjian/ry5.jpg" />
                  <div class="tit">
                    <p>PCB板3D图</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/ruanjian/ry6.jpg" />
                  <div class="tit">
                    <p>PCB板2D图</p>
                  </div>
                </div>
            </div>                        
          </div>
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/ruanjian/ry7.jpg" />
                  <div class="tit">
                    <p>PCB板3D图</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/ruanjian/ry8.jpg" />
                  <div class="tit">
                    <p>PCB板原理图</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/ruanjian/ry9.jpg" />
                  <div class="tit">
                    <p>PCB板2D图</p>
                  </div>
                </div>
            </div>                        
          </div>                    
        </div>
        <div v-show="currentTab === 4" class="facade">
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/zhineng/zn1.jpg" />
                  <div class="tit">
                    <p>智能杀菌空气净化机APP界面</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/zhineng/zn2.jpg" />
                  <div class="tit">
                    <p>智能家居APP界面</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/zhineng/zn3.jpg" />
                  <div class="tit">
                    <p>智能杀菌空气净化机显示界面</p>
                  </div>
                </div>
            </div>                        
          </div>
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/zhineng/zn4.jpg" />
                  <div class="tit">
                    <p>网页设计</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/zhineng/zn5.jpg" />
                  <div class="tit">
                    <p>淘宝详情页</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/zhineng/zn6.jpg" />
                  <div class="tit">
                    <p>淘宝详情页</p>
                  </div>
                </div>
            </div>                        
          </div>
          <div class="line">
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/zhineng/zn7.jpg" />
                  <div class="tit">
                    <p>小夜灯包装设计</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/zhineng/zn8.jpg" />
                  <div class="tit">
                    <p>血氧仪包装设计</p>
                  </div>
                </div>
            </div>
            <div class="item">
                <div class="img">
                  <img src="../assets/img/service/zhineng/zn9.jpg" />
                  <div class="tit">
                    <p>额温枪包装设计</p>
                  </div>
                </div>
            </div>                        
          </div>                    
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
        name: "service",
        components:{
            Header,
            Footer,
        },
        data(){
            return{
              active1: 1,
              active2: 0,
              active3: 0,
              active4: 0,
              currentTab:1,
              currentClass:1
            }
        },
        methods:{
           showActive1(index) {
            this.active1 = index;
            this.currentTab = index
            this.active2 = 0
            this.active3 = 0
            this.active4 = 0
            this.currentClass = index

          },
           showActive2(index) {
            this.active2 = index;
            this.currentTab = index
            this.active1 = 0
            this.active3 = 0
            this.active4 = 0
            this.currentClass = index            
          },
          showActive3(index) {
            this.active3 = index;
            this.currentTab = index
             this.active2 = 0
            this.active1 = 0
            this.active4 = 0
            this.currentClass = index           
          },
          showActive4(index) {
            this.active4 = index;
            this.currentTab = index
            this.active2 = 0
            this.active3 = 0
            this.active1 = 0
            this.currentClass = index            
          }                                                       
        }
    }
</script>

<style lang="scss" scoped>
  .container{
    background: #f5f5f5;
  }
  .banner{
  width: 100%;
  height: 620px;
  background: url("../assets/img/service/serbg.jpg") no-repeat center;
  }
.part{
  .tit1 {
    width: 270px;
    font-size: 36px;
    letter-spacing: 5px;
    color: nth($colour, 1);
    padding: 36px 0 28px 0;
    box-sizing: border-box;
    position: relative;
    margin: 0 auto;

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
  .sports{
    overflow: hidden;
     @include w12;
     margin: 30px auto;
  }
  .list{
    width: 200px;
    float: left;
    cursor: pointer;
    img{
      margin: 0 auto;
    }
    p{
	font-size: 18px;
	color: #353434;   
  line-height: 66px;   
    }
    &.active{
      p{
color: #1f5ba3;
      }
      
    }
  }
  .tab{
     overflow: hidden;
     @include w12;
     margin: 0 auto;
     .facade{
    .line{
      margin-bottom: 30px;
      overflow: hidden;
    }
    .item{
    width: 390px;
    height: 250px;
    float: left;
    margin-left: 10px;
    overflow: hidden;
    :first-child {
      margin-left: 0 !important;
    } 
    .img{
    width: 390px;
    height: 250px;
    position: relative;
    cursor: pointer;
    .tit{
      width: 390px;
	    height: 60px;
	    background-color: #507bad;
      // opacity: 0.7;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 5;
      font-size: 18px;
      color: #fafbfc;
      text-align: center;
      line-height: 60px;
      display: none;
    }     
    &:hover{
      .tit{
        animation: fadeInUp 1s;
        display: block;
      }
    } 
    }
    }
     }
  }
}
</style>

