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
        <div class="title">2020年江苏庆亚电子科技有限公司年会表演</div>
        <div class="author">作者：江苏庆亚电子科技有限公司       发布时间：2020-3-18      111次浏览</div>
        <div class="descripe">
          本着实干兴企，倡导务实，脚踏实地的分针，无论过程多么艰辛，全体员工能不畏艰辛，迎难而上，2019年在公司所有员工的努力下，为公司取得了理想的成绩，希望在新的一年里，我们再接再厉，再创辉煌。
        </div>
        <div class="p1 mt">
         1.员工多才多艺的表演给年会现场添加了不少色彩，台下的观众更是掌声不断，很是热闹非凡。
        </div>
        <div class="mt">
          <img src="../assets/img/news/year1.png" />
        </div>
        <div class="p1 mt">2.付出就会有回报，公司领导为公司优秀员工颁发荣誉证书和奖金，年会的抽奖也给每个员工带来了很多福利。</div>
        <div class="mt">
          <img src="../assets/img/news/year2.png" />
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
  name: "yeaer",
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
