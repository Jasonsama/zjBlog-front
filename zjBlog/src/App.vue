<template>
  <div id="app">
    <div class="locate-div"><el-button class="btn btn-success" @click="changeLocale">中文/EN</el-button></div>
    <img src="./assets/logo.png">
    <h1>{{$t("message.title")}}</h1>
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
        <a href="http://www.jasonsama.cn">{{$t("menu.contact")}}</a>
        <!-- <router-link to="/Cont">{{$t("menu.contact")}}</router-link> -->
      </li>
    </ul>
    <div id='app-content'><router-view/></div>
  </div>
</template>
<script>
// import Router from 'vue-router'
// import Index from '@/components/Index/Index'
export default {
  name: 'App',
  methods: {
    changeLocale () {
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
    }
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.locate-div{
  text-align: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
