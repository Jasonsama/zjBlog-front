<template>
  <div id="app">
    <div class="locate-div">
      <!-- <el-button class="btn btn-success" @click="changeLocale">中文/EN</el-button> -->
      <el-select v-model="default_locale" placeholder="请选择" class='locale_select'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
<!--         <el-option value="zh" label="中文"></el-option>
        <el-option value="en" label="英文"></el-option> -->
      </el-select>
    </div>
    <img src="./assets/logo.png">
    <h1>{{$t("message.title")}}</h1>
    <div class="menuDiv">
      <div id="menuBar" :class="menuBarFixed == true ? 'isFixed' :''">
        <ul>
    <!--       <li>
            <router-link to="/HelloWorld">Vue Default Page</router-link>
          </li> -->
          <li>
            <router-link to="index">{{$t("menu.home")}}</router-link>
            <!-- <a href="http://www.jasonsama.cn">Home Page</a> -->
          </li>
          <li>
            <router-link to="articles">{{$t("menu.articles")}}</router-link>
          </li>
          <li>
            <router-link to="about">{{$t("menu.about")}}</router-link>
          </li>
          <li>
            <a href="http://www.jasonsama.cn" target="_blank">{{$t("menu.contact")}}</a>
            <!-- <router-link to="/Cont">{{$t("menu.contact")}}</router-link> -->
          </li>
        </ul>
      </div>
    </div>
    <div id='app-content'>
      <transition :name="transitionName">
        <router-view class="Router"  keep-alive/>
      </transition>
    </div>
    <div id="app-footer">

    </div>
  </div>
</template>
<script>
// import Router from 'vue-router'
// import Index from '@/components/Index/Index'
// import {Toast} from 'vant'
var offsetTop
export default {
  name: 'App',
  data () {
    return {
      options: [
        {
          value: 'zh',
          label: '中文'
        }, {
          value: 'en',
          label: '英文'
        }
      ],
      default_locale: localStorage.getItem('g_locale') ? localStorage.getItem('g_locale') : 'zh',
      menuBarFixed: false,
      transitionName: 'slide-right' // 默认动态路由变化为slide-right
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    offsetTop = document.querySelector('#menuBar').offsetTop
  },
  methods: {
    changeLocale () {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
      localStorage.setItem('g_locale', this.$i18n.locale)
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > offsetTop) {
        this.menuBarFixed = true
      } else {
        this.menuBarFixed = false
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
  // router: new Router({
  //   routes: [
  //     {
  //       path: '/', // 默认路径
  //       name: 'index',
  //       component: Index
  //     }
  //   ]
  // })
}
</script>
<style>
body {
  overflow: scroll;
  overflow-x: hidden;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0em;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.locate-div {
  text-align: right;
}
.locale_select {
  width:5em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app-content {
  margin:50px auto;
}
.Router {
/* position: absolute;
 width: 100%;*/
 transition: all .8s ease;
 /*top: 40px;*/
}
.slide-left-enter, .slide-right-leave-active {
 opacity: 0;
 -webkit-transform: translate(100%, 0);
 transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
 opacity: 0;
 -webkit-transform: translate(-100%, 0);
 transform: translate(-100% 0);
}
.menuDiv{
  height:3em;
}
#menuBar{
  padding: 1em 0em;
}
.isFixed{
  position:fixed;
  background-color:#Fff;
  top:0;
  z-index:999;
  left: 0em;
  width:100%;
}
</style>
