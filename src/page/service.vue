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
    <div class="se-inner">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane class="nas"  name="first">
          <span slot="label">服务领域</span>
          <div class="fw-cot">
            <div class="list">
              <p>产品策划研究</p>
              <p>提供以产品研究为主的设计研究服务，如传统品牌转型、功能性研究、新功能塑造、服务体验等，内容包括用户研究，市场竞品分析，卖点提炼，
                设计趋势，CMF设计等。为客户提供专家型设计策略顾问咨询和完整的产品开发解决方案。
              </p>
              <div class="img">
                <img src="../assets/img/service/ct-1.jpg"/>
              </div>
            </div>
            <div class="list">
              <p>产品外观设计</p>
              <p>我们关注在生产代工与产品设计中寻求平衡，回报客户超预期的经济价值作为目标。及能够为多年合作企业提供更多服务。我们拟将为合作伙伴
                提供、设计前期调研、设计效果图、CMF工程设计方面的服务，满足客户在设计实现、进度控制、成本、材料、生产工艺及其限制性、可靠性、
                安全性等诸多方面的要求。
              </p>
              <div class="img">
                <img src="../assets/img/service/ct-2.jpg"/>
              </div>
            </div>
            <div class="list">
              <p>结构设计</p>
              <p>参与产品项目立项可行性调研，参与系统方案设计；拟制定结构设计方案和项目计划，研究开发新结构新技术，提升产品性能和质量。结合工业
                设计师设计出产品结构、零部件的详细设计；承担样机的研制与调试相关工作。
              </p>
              <div class="img">
                <img src="../assets/img/service/ct-3.jpg"/>
              </div>
            </div>
            <div class="list">
              <p>软硬件开发</p>
              <p>用科技让科技服务生活，产品类型包括医疗器械、智能家居、消费电子、家用电器、智能垃圾回收箱等。公司拥有核心软硬件开发团队，对硬件
                电路设计、调试与软件的编程设计有着丰富的经验和独特的见解。
              </p>
              <div class="img">
                <img src="../assets/img/service/ct-4.jpg"/>
              </div>
            </div>
            <div class="list">
              <p>平面交互设计</p>
              <p>庆亚集重金聘请网页前端工程师、网页后端工程师展现在界面设计方面的实力，专注于移动互联网时代的交互及APP开发。服务包括：UI设计、
                网页前后端的开发与维护、小程序、PC端网页、移动端网页等设计与开发。
              </p>
              <div class="img">
                <img src="../assets/img/service/ct-5.jpg"/>
              </div>
            </div>
            <div class="list">
              <p>制造中心</p>
              <p>经营范围：SMT、DIP、PCB、板焊接加工、电子电路板开发、电子产品OEM代工、电子变压器生产制造、成品线束形端子加工制造等。现公司将打造十万级无尘车间，设备投入突破1200万！
              </p>
              <div class="img">
                <img src="../assets/img/service/ct-6.jpg"/>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label">服务流程</span>
          <div class="fl-cot">
            <div class="list">
              <div class="left">
                <img src="../assets/img/service/ling/fl-1.jpg">
              </div>
              <div class="right">
               <p class="tit">设计研究 <span>DESIGN RESEARCH</span></p>
                <p class="tit1">内容及提交结果</p>
                <div class="txt">通过小组讨论式的交流了解产品的功能及使用细节、全面的市场调研与分析、摸
                  索和提炼产片的定位及卖点、提供专业的调研报告
                </div>
                <p class="tit1">用途</p>
                <div class="txt">确定正确合理的设计方向及目标，制定设计策略</div>
              </div>
            </div>
            <div class="lists">
              <div class="left">
                <p class="tit">外观输出 <span>FRIST DESIGN STEP</span></p>
                <p class="tit1">内容及提交结果</p>
                <div class="txt">多次头脑风暴与创意草图的沟通、提供三款不同风格的设计方案效果
                  图、产品三视图和外观尺寸图、每款产品材质和细节处理文件
                </div>
                <p class="tit1">用途</p>
                <div class="txt">该阶段的成果主要用于委托方进行讨论，进行外观设计方案的筛选和
                  确定
                </div>
              </div>
              <div class="right">
                <img src="../assets/img/service/ling/fl-2.jpg">
              </div>

            </div>
            <div class="list">
              <div class="left">
                <img src="../assets/img/service/ling/fl-3.jpg">
              </div>
              <div class="right">
                <p class="tit">外观细节处理 <span>DETAILED DESIGN</span></p>
                <p class="tit1">内容及提交结果</p>
                <div class="txt">定案产品的多角度效果图、产品细节表现图、产品零件的颜色PANTONE色标、
                  产品的零件材质描述文件、产品的零件表面处理描述文件
                </div>
                <p class="tit1">用途</p>
                <div class="txt">用于外观设计的准确描述和确认，双方签署外观设计确认协议，进行该阶段工作
                  的交接，交接完成后转入结构设计阶段
                </div>
              </div>
            </div>
            <div class="lists">
              <div class="left">
                <p class="tit">结构设计 <span>STRUCTURE DESIGN</span></p>
                <p class="tit1">内容及提交结果</p>
                <div class="txt">结构设计的3D技术图纸、元器件排布及安装固定方式、内部走线排布
                  、材料及工艺确认
                </div>
                <p class="tit1">用途</p>
                <div class="txt">用于委托方和设计方进行结构设计的讨论，双方讨论提出修改或改进
                  的建议，用于下一步的细化
                </div>
              </div>
              <div class="right">
                <img src="../assets/img/service/ling/fl-4.jpg">
              </div>

            </div>
            <div class="list">
              <div class="left">
                <img src="../assets/img/service/ling/fl-5.jpg">
              </div>
              <div class="right">
                <p class="tit">结构设计细化 <span>DETAILED STRUCTURE DESIGN</span></p>
                <p class="tit1">内容及提交结果</p>
                <div class="txt">Pro/E或UG  3D文档、生产BOM表、外观申请六视图、丝印文件和表面处理文
                  件
                </div>
                <p class="tit1">用途</p>
                <div class="txt">通用标准加工文件交给手板厂，用于手板厂编程生产；用于壳体的表面处理；用
                  于外观专利申请的图样内容；用于生产线产品的组装及公司备案存档
                </div>
              </div>
            </div>
            <div class="lists">
              <div class="left">
                <p class="tit">软硬件设计 <span>FRIST DESIGN STEP</span></p>
                <p class="tit1">内容及提交结果</p>
                <div class="txt">硬件电路图设计、电路板排版、BOM整理以及相关实验数据分析，配
                  合结构工程师完成整机联调并向生产车间输出PCB电路板GERBER文
                  件、BOM文件、坐标文件等实施软件平台的搭建。软件设计和编写：
                  配合硬件工程师完成整机联调并想生产车间输出Hex或Bin文件
                </div>
                <p class="tit1">用途</p>
                <div class="txt">用于委托方和设计方进行软硬件项目立项可行性的讨论，双方讨论提
                  出修改或改进的建议，用于下一步系统性的方案设计
                </div>
              </div>
              <div class="right">
                <img src="../assets/img/service/ling/fl-6.jpg">
              </div>

            </div>
            <div class="list">
              <div class="left">
                <img src="../assets/img/service/ling/fl-7.jpg">
              </div>
              <div class="right">
                <p class="tit">产品样机制作 <span>STRUCTURE  DESIGN</span></p>
                <p class="tit1">内容及提交结果</p>
                <div class="txt">产品外观手板；产品功能样机
                </div>
                <p class="tit1">用途</p>
                <div class="txt">确定各部件加工工艺；组织生产及优化工艺；样品检验及休整；产品认证及合格
                  检验；确定批量化生产组织流程；产品批量化生产准备
                </div>
              </div>
            </div>
            <div class="lists">
              <div class="left">
                <p class="tit">平面包装及交互设计 <span>PLANAR PACKAGING  AND  INTERACTIVE  DESIGN</span></p>
                <p class="tit1">内容及提交结果</p>
                <div class="txt">根据客户需求提供三款不同风格包装设计方案和三款界面不同设计风
                  格方案效果图、包装方案纸质材质及外观尺寸图
                </div>
                <p class="tit1">用途</p>
                <div class="txt">该阶段的成果主要用于委托方进行讨论，进行最后产品方案的筛选和
                  确定，同时整个产品开发阶段将告一段落
                </div>
              </div>
              <div class="right">
                <img src="../assets/img/service/ling/fl-8.jpg">
              </div>

            </div>
            <div class="list">
              <div class="left">
                <img src="../assets/img/service/ling/fl-9.jpg">
              </div>
              <div class="right">
                <p class="tit">供应链 <span>DESIGN RESEARCH</span></p>
                <p class="tit1">内容及提交结果</p>
                <div class="txt">手板制作、模具厂跟踪与协调、电子电路板开发与制作、电子产品OEM代工、电
                  子变压器生产制造、SMT、DIP、PCB、成品线束旗形端子加工制造等服务
                </div>
                <p class="tit1">用途</p>
                <div class="txt">为客户提供更便捷更一体化的服务</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label">服务客户</span>
          <div class="fw-cot">
            <img src="../assets/img/service/fk.png"/>
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
        name: "service",
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

.se-inner{
  @include w12;
 .fw-cot{
   overflow: hidden;
   padding: 80px 80px;
   box-sizing: border-box;
   .list{
     text-align: left;
     padding:30px 0 0 0;
     box-sizing:border-box;
     :first-child{
       font-size: 17px;
       font-weight: bold;
       line-height: 37px;
       color: #000000;
     }
     :nth-child(2){
       font-size: 15px;
       line-height: 24px;
       color: #7f7f7f;
       padding: 20px 0;
       box-sizing: border-box;
     }
   }
 }
  .fl-cot{
    overflow: hidden;
    padding: 80px 80px;
    box-sizing: border-box;
    .list{
      overflow: hidden;
      margin: 60px 0 0 0;
      .left{
        float: left;
        width: 50%;
      }
      .right{
        float: left;
        width: 50%;
        text-align: left;
        .tit{
          font-size: 17px;
          font-weight: bold;
          line-height: 17px;
          color: #000000;
          span{
            font-size: 14px;
            line-height: 14px;
            color: #7f7f7f;
          }
        }
        .tit1{
          font-size: 14px;
          line-height: 24px;
          color: #000000;
          padding: 10px 10px;
          box-sizing: border-box;
          position: relative;
          &:before{
            display: block;
            content: '';
            width: 3px;
            height: 15px;
            background: #f3a900;
            position: absolute;
            left: 0;
            top: 15px;

          }
        }
        .txt{
          font-size: 14px;
          line-height: 24px;
          color: #7f7f7f;
        }
      }
    }
    .lists{
      overflow: hidden;
      margin: 60px 0 0 0;
      .right{
        float: left;
        width: 50%;
      }
      .left{
        float: left;
        width: 41%;
        text-align: left;
        margin: 0 43px 0 47px;
        .tit{
          font-size: 17px;
          font-weight: bold;
          line-height: 17px;
          color: #000000;
          span{
            font-size: 14px;
            line-height: 14px;
            color: #7f7f7f;
          }
        }
        .tit1{
          font-size: 14px;
          line-height: 24px;
          color: #000000;
          padding: 10px 10px;
          box-sizing: border-box;
          position: relative;
          &:before{
            display: block;
            content: '';
            width: 3px;
            height: 15px;
            background: #f3a900;
            position: absolute;
            left: 0;
            top: 15px;

          }
        }
        .txt{
          font-size: 14px;
          line-height: 24px;
          color: #7f7f7f;
        }
      }
    }
  }
}
</style>

<style lang="scss">
  .se-inner{
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
