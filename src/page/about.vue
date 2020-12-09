<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner"></div>
    <div class="ab-inner">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane class="nas" name="first">
          <span slot="label">公司简介</span>
          <div class="cots">
            <div class="text">
              <p>江苏庆亚电子科技有限公司成立于2010年12月，现有厂房4500平方米，员工150人，公司自成立以来，一直坚持科学发展观，将技术研发和人才培养作为公司的发展目标，拥有经验丰富、创新能力强的技术研发团队。其中研发与试验发展人员20名，拥有高级职称1名，中级职称5人，研究生7名，所有技术人员均拥有扎实的专业技能和丰富的研发生产经验。</p>
              <br />
              <p>公司非常重视新产品或新工艺的研发，每年在研发上都有非常大的投入，并获得了优异的成果，其中在智能家居、医疗器械、生活用品、电子产品都涉及众多项目，在产品研发工作中，公司根据科技发展和市场需求，加强与各相关科研领域的合作，使科研成果转化为生产力，为企业创造效益。</p>
              <br />
              <p>公司目前主要从事PCB电路板焊接（OEM、SMT、DIP）各类电子、电器产品的成品生产测试组装；以及各种电子线束加工订制和各类低频电子变压器的订制。生产的产品主要有智能家居系列，各类温度控制器系列、充电器，电动车充电桩系列，传统电源和各类电源板系列以及其他电子产品控制板等，是一家集开发、生产、销售、服务于一体的高新技术企业。公司位于江苏省徐州市国家安全科技产业园漓江路C6栋-103-105-（南高速出口附近）、地势优越、交通便利。</p>
              <br />
              <p>公司高度重视质量管理体系的建设，先后通过了ISO9001、ISO14001体系认证和ROHS认证，部分产品通过了3C、CQC、CE等认证。公司自成立以来，以市场为导向，以人才为根本，坚持科技创新，综合实力不断增强，生产规模日益扩大。各项经济指标一直保持70%以上的增长速度；现研发及生产能力位居区域同行业前列。公司拥有的授权和已受理的专利共计28项。公司生产的产品主要应用于通讯设备、医疗设备、工程机械、电力设备、消防设施、网络通讯、节能灯、以及各种智能家电智能家居等民用系列产品。公司秉承“客户至上、锐意进取”的经营理念，坚持“质量第一” 的原则为广大客户提供优质的服务并赢得了大家一致的好评与认可。并与大部分公司签订了长期的战略合作伙伴协议。</p>
            </div>
            <div class="txt">
              <p>真心服务 诚挚待人 质量保证</p>
              <p>Sincere service welcome Quality assurance</p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">成长历程</span>
          <div class="c-cot">
            <img src="../assets/img/about/cheng.png" />
            <div
              class="item item1 wow fadeInLeft animated"
              style="visibility: visible; animation-name: fadeInLeft;"
            >
              <p>
                2020年公司将实现自主
                <br />研发与生产一体的综合
                <br />性企业，并打造十万级
                <br />无尘车间，设备投入
                <br />1200万
              </p>
            </div>
            <div
              class="item item2 wow fadeInRight animated"
              style="visibility: visible; animation-name: fadeInRight;"
            >
              <p>
                2017年增加第五条
                <br />全自动贴片线，并
                <br />通过IS09001认证，
                <br />并开拓国外市场，
                <br />产值突破3000万
              </p>
            </div>
            <div
              class="item item3 wow fadeInLeft animated"
              style="visibility: visible; animation-name: fadeInLeft;"
            >
              <p>
                2015年增加第三条全
                <br />自动贴片线，同时成
                <br />立变压器和线束事业
                <br />部，并取得ROHS和
                <br />CE认证，产值突破
                <br />700万
              </p>
            </div>
            <div
              class="item item4 wow fadeInRight animated"
              style="visibility: visible; animation-name: fadeInRight;"
            >
              <p>
                2013年公司增加第
                <br />二条全自动贴片线
                <br />，员工40人，产值
                <br />突破300万
              </p>
            </div>
            <div
              class="item item5 wow fadeInLeft animated"
              style="visibility: visible; animation-name: fadeInLeft;"
            >
              <p>
                2010年江苏庆亚电
                <br />子科技有限公司成
                <br />立，坐落于铜山新
                <br />区工业园
              </p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">公司荣誉</span>
          <div class="r-cots">
            <div class="item">
              <img src="../assets/img/about/ry1.png" />
            </div>
            <div class="item">
              <img src="../assets/img/about/ry2.png" />
            </div>
            <div class="item">
              <img src="../assets/img/about/ry3.png" />
            </div>
            <div class="item">
              <img src="../assets/img/about/ry4.png" />
            </div>
            <div class="item">
              <img src="../assets/img/about/ry5.png" />
            </div>
            <div class="item">
              <img src="../assets/img/about/ry6.png" />
            </div>
            <div class="item">
              <img src="../assets/img/about/ry7.png" />
            </div>
            <div class="item">
              <img src="../assets/img/about/ry8.png" />
            </div>
            <div class="item">
              <img src="../assets/img/about/ry9.png" />
            </div>
            <div class="item">
              <img src="../assets/img/about/ry10.png" />
            </div>
          </div>
        </el-tab-pane>
        <!-- <el-tab-pane>
          <span slot="label">精英团队</span>
          <div class="j-cots">
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q1.png" />
              </div>
              <p class="name">胡兴正</p>
              <p class="j-zhi">研发部总监</p>
              <div class="j-text">
                系统架构师，研发部负责人。带领
                团队开发多款新型项目，有丰富的
                产品解决和实战经验。
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q2.png" />
              </div>
              <p class="name">孙世成</p>
              <p class="j-zhi">软硬件主管工程师</p>
              <div class="j-text">
                项目方案的设计，硬件的开发设计
                ，项目软件的编程设计，对设计有
                着独特的见解。
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q3.png" />
              </div>
              <p class="name">韩伟先</p>
              <p class="j-zhi">Android工程师</p>
              <div class="j-text">
                Android手机、平板原生APP、定
                制系统应用开发。在用户体验、性
                能、安全等方面有良好的解决方案。
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q4.png" />
              </div>
              <p class="name">吴楠</p>
              <p class="j-zhi">电子硬件主管工程师</p>
              <div class="j-text">
                负责产品的硬件开发与设计工作，
                拥有较丰富的硬件电路设计与调试
                经验，从事专业工作十年。
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q5.png" />
              </div>
              <p class="name">孙彐梅</p>
              <p class="j-zhi">Web前端工程师</p>
              <div class="j-text">
                根据产品需求或原型完成前端页面
                的开发及维护，包括PC端网页、小
                程序、移动端网页等。
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q6.png" />
              </div>
              <p class="name">胡兴家</p>
              <p class="j-zhi">Web后端工程师</p>
              <div class="j-text">
                根据需求完成web后端页面开发及
                维护，使用python-flask框架搭建
                后端。
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q7.png" />
              </div>
              <p class="name">毛洪燕</p>
              <p class="j-zhi">工业设计师</p>
              <div class="j-text">
                从事ID外观设计多年，热爱设计，
                对造型、色彩、材质、表面处理工
                艺等有充分的感知和把握能力。
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q8.png" />
              </div>
              <p class="name">王东升</p>
              <p class="j-zhi">产品经理</p>
              <div class="j-text">
                整机产品设计:主要负责整机功能实
                现、产品内部构造、支撑方式、连
                接方式、零件布局等方面的设计。
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q9.png" />
              </div>
              <p class="name">徐同赞</p>
              <p class="j-zhi">硬件工程师</p>
              <div class="j-text">
                电路硬件测试、维修、原理图设计，
                PCB排版布线,在专注和坚持中追寻
                梦想的灯塔，终会点亮希望之光。
              </div>
            </div>
            <div class="item">
              <div class="img">
                <img src="../assets/img/about/q10.png" />
              </div>
              <p class="name">彭微微</p>
              <p class="j-zhi">网页设计师</p>
              <div class="j-text">
                APP页面的设计，美化，研发产品
                操作页面的制作以及公司电商网站
                的制作与发布等。
              </div>
            </div>
          </div>
        </el-tab-pane> -->
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
  name: "about",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #f5f5f5;
}
.banner {
  width: 100%;
  height: 501px;
  background: url("../assets/img/about/chengbg.png") no-repeat center;
}
.ab-inner {
  @include w12;
  .cots {
    @include w12;
    /*height: 683px;*/
    padding: 70px 80px;
    box-sizing: border-box;
    .text {
      font-size: 16px;
      line-height: 36px;
      letter-spacing: 1px;
      color: #0e0e0e;
      text-align: left;
    }
    .txt {
      line-height: 45px;
      letter-spacing: 2px;
      color: nth($colour, 1);
      font-weight: bold;
      padding: 40px 0 0 0;
      box-sizing: border-box;
      :first-child {
        font-size: 25px;
      }
      :nth-child(2) {
        font-size: 21px;
      }
    }
  }
  .c-cot {
    @include w12;
    overflow: hidden;
    padding: 70px 80px;
    box-sizing: border-box;
    position: relative;
    img {
      height: 1200px;
    }
    .item {
      text-align: left;
      p {
        font-size: 18px;
        line-height: 36px;
        letter-spacing: 1px;
        color: #040000;
      }
    }
    .item1 {
      position: absolute;
      left: 165px;
      top: 321px;
    }
    .item2 {
      position: absolute;
      right: 157px;
      top: 492px;
    }
    .item3 {
      position: absolute;
      left: 165px;
      bottom: 413px;
    }
    .item4 {
      position: absolute;
      right: 157px;
      bottom: 295px;
    }
    .item5 {
      position: absolute;
      left: 189px;
      bottom: 55px;
    }
  }
  .r-cots {
    @include w12;
    padding: 40px 10px 50px 10px;
    box-sizing: border-box;
    overflow: hidden;
    .item {
      width: 200px;
      height: 270px;
      float: left;
      margin: 20px 18px;
    }
  }
  .j-cots {
    @include w12;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    background: #f5f5f5;
    .item {
      width: 254px;
      height: 350px;
      float: left;
      margin: 20px 20px;
      background: #ffffff;
      padding: 20px 18px;
      box-sizing: border-box;
      .name {
        font-size: 17px;
        line-height: 47px;
        color: #01068b;
        font-weight: bold;
      }
      .j-zhi {
        padding: 10px;
        box-sizing: border-box;
        background: #c9c9ca;
        font-size: 18px;
        line-height: 15px;
        color: #ffffff;
        letter-spacing: 3px;
      }
      .j-text {
        padding: 20px 0;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 20px;
        color: #191919;
      }
    }
  }
}
</style>
<style lang="scss">
.ab-inner {
  .el-tabs--border-card {
    box-shadow: none;
    border: none;
    .el-tabs__header {
      border: none !important;
    }
  }
  .el-tabs__content {
    padding: 0 !important;
    .sc-cot {
      width: 100%;
      position: relative;
      overflow: hidden;
      padding: 30px 0;
      box-sizing: border-box;
      .list {
        width: 568px;
        background-color: #ffffff;
        border: 1px solid #f5f5f5;
        overflow: hidden;
        cursor: pointer;
        float: left;
        margin-left: 20px;
        margin-bottom: 20px;
        &:hover {
          /*border:1px solid #0064cd;*/
        }
        .img {
          width: 568px;
          height: 407px;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.05);
          }
        }
        p {
          font-size: 18px;
          font-weight: bold;
          letter-spacing: 1px;
          color: #333333;
          line-height: 80px;
        }
      }
    }
  }
  .el-tabs__item {
    width: 400px !important;
    text-align: center;
    /*border: solid 1px #ced1e5!important;*/
    background: #fff;
    height: 100px;
    line-height: 100px;
    box-sizing: border-box;
    color: #030303 !important;
    margin: 0 !important;
    float: left !important;
    font-size: 30px;
    .nas {
      i {
        margin-right: 5px !important;
      }
    }
    &:first-child {
      margin: 0 !important;
      border-right: none !important;
    }
    &:nth-child(2) {
      border-right: none !important;
    }
    &:nth-child(3) {
      border-right: none !important;
    }
  }
  .is-active {
    background-color: $theme-colour !important;
    color: #fff !important;
  }
}
</style>
