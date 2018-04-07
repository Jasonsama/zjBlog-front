<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/HelloWorld">Vue Default Page</router-link>
      </li>
      <li>
        <a href="http://www.jasonsama.cn">Home Page</a>
      </li>
      <li>
        <router-link to="/Articles">Articles</router-link>
      </li>
      <li>
        <router-link to="/About">About</router-link>
      </li>
      <li>
        <router-link to="/About">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to zjBlog!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
