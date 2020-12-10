<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner"></div>
    <div class="part1">
      <div class="tit1">关于我们</div>
      <div class="ab-inner">
        <p>
          江苏庆亚电子科技有限公司成立于2010年12月，现有厂房4500平方米，员工150人，公司自成立以来，一直坚持科学发展观，将技术研发和人才培养作为公司的发展目标，
拥有经验丰富、创新能力强的技术研发团队。其中研发与试验发展人员20名，拥有高级职称1名，中级职称5人，研究生7名，所有技术人员均拥有扎实的专业技能和丰富的
研发生产经验。
        </p>
        <p>
          公司非常重视新产品或新工艺的研发，每年在研发上都有非常大的投入，并获得了优异的成果，其中在智能家居、医疗器械、生活用品、电子产品都涉及众多项目，在产品
研发工作中，公司根据科技发展和市场需求，加强与各相关科研领域的合作，使科研成果转化为生产力，为企业创造效益。
        </p>
        <p>
          公司目前主要从事PCB电路板焊接（OEM、SMT、DIP）各类电子、电器产品的成品生产测试组装；以及各种电子线束加工订制和各类低频电子变压器的订制。生产的产品
主要有智能家居系列，各类温度控制器系列、充电器，电动车充电桩系列，传统电源和各类电源板系列以及其他电子产品控制板等，是一家集设计开发、生产、销售、服务
于一体的高新技术企业。公司位于江苏省徐州市国家安全科技产业园漓江路C6栋-103-105-（南高速出口附近）、地势优越、交通便利。
        </p>
        <p>
          公司高度重视质量管理体系的建设，先后通过了ISO9001、ISO14001体系认证和ROHS认证，部分产品通过了3C、CQC、CE等认证。公司自成立以来，以市场为导向，以
人才为根本，坚持科技创新，综合实力不断增强，生产规模日益扩大。各项经济指标一直保持70%以上的增长速度；现研发及生产能力位居区域同行业前列。公司拥有的授
权和已受理的专利共计28项。公司生产的产品主要应用于通讯设备、医疗设备、工程机械、电力设备、消防设施、网络通讯、节能灯、以及各种智能家电智能家居等民用系
列产品。公司秉承“客户至上、锐意进取”的经营理念，坚持“质量第一” 的原则为广大客户提供优质的服务并赢得了大家一致的好评与认可。并与大部分公司签订了长
期的战略合作伙伴协议。
        </p>
      </div>
    </div>
    <div class="part2">
      <div class="tit1">专利证书</div>
      <div class="cot">
         <img src="../assets/img/about/zhuaili.jpg" />
      </div>
    </div>
     <div class="part3">
      <div class="tit1">办公环境</div>
      <div class="cot">
        <div class="list">
           <img src="../assets/img/about/hj1.jpg" />
        </div>
        <div class="list">
           <img src="../assets/img/about/hj2.jpg" />
        </div>
        <div class="list">
           <img src="../assets/img/about/hj3.jpg" />
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
  name: "about",
  components: {
    Header,
    Footer
  },
  data() {
    return {
     
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
  height: 620px;
  background: url("../assets/img/about/chengbg.jpg") no-repeat center;
}
.part1,
.part2,
.part3{
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

}
.ab-inner {
  @include w12;
	font-size: 16px;
	line-height: 35px;
  color: #544f4f;
  text-align: left;
  p{
    padding: 12px 0;
    box-sizing: border-box;
  }

}
.part2{
  .cot{
@include w12;
margin: 40px auto 0;
  }
}
.part3{
  .cot{
@include w12;
margin: 40px auto 0;
.list{
  display: inline-block;
  width: 397px;
  height: 300px;
  img{
    margin: 0 auto;
  }
}
  }
}
</style>

