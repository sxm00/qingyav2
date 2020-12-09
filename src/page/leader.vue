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
        <div class="title">高新区政府各位领导莅临我司考察指导</div>
        <div class="author">作者：江苏庆亚电子科技有限公司       发布时间：2020-3-18      120次浏览</div>
        <div class="descripe">
         随着公司新厂区投入生产，我公司生产状况得到了高新区相关领导的大力支持。2020年2月，高新区政府及园区领导带队的考察团来到新厂区现场，对我公司厂区生产情况进行考察，沈总等人陪同。
        </div>
        <div class="p1 mt">
         1.在肆虐的新型冠状病毒面前，沈总给各位领导讲解了我司应对疫情的具体措施，本着一切为了员工的健康着想，我司实行了颁发抗疫手册，发放口罩，每日三次体温检测，对厂区全方位消毒等措施，严格按照政府要求复工复产。
        </div>
        <div class="mt">
          <img src="../assets/img/news/leader1.png" />
        </div>
        <div class="p1 mt">2.沈总介绍机器使用以及生产流程，严格按照上级要求安全生产，保证质量的同时更能遵守相关法规条例。</div>
        <div class="mt">
          <img src="../assets/img/news/leader2.png" />
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
  name: "leader",
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
