// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css';
import 'vue2-animate/dist/vue2-animate.min.css';
import "@/assets/font/iconfont.css";
import 'swiper/css/swiper.css'
import 'swiper/js/swiper.js';
import {WOW} from 'wowjs';
import VueAMap from 'vue-amap';

import router from './router'

new WOW({live: false}).init();
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
VueAMap.initAMapApiLoader({
  key: '949bcb8828473e6541a4a9ad7a798c92',
  plugin: [
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.OverView", //地图鹰眼插件
    "AMap.ToolBar", //地图工具条
    "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    // "AMap.CircleEditor", //圆形编辑器插件
    // "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  v: '1.4.4'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
