<template>
  <div class="container">
    <div class="home">
      <Header></Header>
    </div>
    <div class="banner"></div>
    
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

</style>

