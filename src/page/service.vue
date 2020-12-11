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
           <!-- <img src="../assets/img/service/hj1.jpg" /> -->
           <p>市场分析</p>
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
  
            }
        },
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

}
</style>

