<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner"></div>
    <div class="part1">
      <div class="tit1">新闻中心</div>
      <div class="tit2">CONTACT US</div>
      <div class="cot">
        <div class="title">提高员工的消防意识，检验公司消防设施</div>
        <div class="author">作者：江苏庆亚电子科技有限公司 发布时间：2020-3-18 111次浏览</div>
        <div class="descripe">
          为牢固地树立消防安全意识，及时消除各类火灾隐患，落实“安全发展、预防为主”的既定方针，提高公司员工的自护、自救和互救的能力，通过演练使每位参与者能学会灭火器的使用方法。提高自我安全意识，化解风险。要求：从实际出发，通过演练使每位参与人员受到培训和锻炼。
        </div>
        <div class="p1 mt">
          1.陈总给我们讲解本次消防演练的目的,牢固树立起消防安全意识，及时清除各类火灾隐患，通过演练使每位参与者能学会灭火器和消防栓的使用方法,提高自我安全意识，化解风险。
        </div>
        <div class="mt">
          <img src="../assets/img/news/fire1.png" />
        </div>
        <div class="p1 mt">2.陈总给我们讲解干粉灭火器的作用、工作原理、使用范围及使用方法,并进行现场操作。</div>
        <div class="mt">
          <img src="../assets/img/news/fire2.png" />
        </div>
        <div class="p1 mt">3.点燃油桶内燃料，现场示范灭火过程。并让员工代表现场操作灭火器灭火。</div>
        <div class="mt">
          <img src="../assets/img/news/fire3.png" />
        </div>
        <div class="p1 mt">4.实战演练，遇到不可自行扑灭的大火，应按照消防图指示在应急通道疏散员工，离开火灾现场。</div>
        <div class="mt">
          <img src="../assets/img/news/fire4.png" />
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
  name: "firecenter",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 446px;
  background: url("../assets/img/index/bg1.png") no-repeat center;
}
.part1 {
  .tit1 {
    width: 270px;
    font-size: 44px;
    font-weight: bold;
    letter-spacing: 5px;
    color: nth($colour, 1);
    padding: 70px 0 28px 0;
    box-sizing: border-box;
    position: relative;
    margin: 0 auto;
    &:after {
      display: block;
      width: 85px;
      height: 2px;
      background: nth($colour, 1);
      content: "";
      position: absolute;
      left: 34%;
      top: 136px;
    }
    &:before {
      display: none;
      width: 85px;
      height: 2px;
      background: nth($colour, 2);
      content: "";
      position: absolute;
      right: 0;
      top: 128px;
    }
  }
  .tit2 {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #333333;
    padding: 0 0 20px 0;
    box-sizing: border-box;
  }
  .cot {
    @include w12;
    padding: 20px 0 60px 0;
    box-sizing: border-box;
    .title {
      font-size: 50px;
      font-weight: bold;
      line-height: 59px;
      letter-spacing: 2px;
      color: #010101;
    }
    .author {
      font-size: 17px;
      line-height: 82px;
      letter-spacing: 1px;
      color: #424141;
    }
    .descripe {
      width: 1202px;
      background-color: #d5d3d3;
      border: solid 1px #787777;
      font-size: 17px;
      line-height: 33px;
      letter-spacing: 1px;
      color: #030303;
      padding: 27px 65px;
      box-sizing: border-box;
      text-align: left;
    }
    .p1 {
      font-size: 17px;
      line-height: 33px;
      letter-spacing: 1px;
      color: #030303;
      text-align: left;
    }
    .mt {
      margin-top: 50px;
    }
  }
}
</style>
