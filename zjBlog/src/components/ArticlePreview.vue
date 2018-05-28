<template>
  <div class="hello">
    <div class='title'>
      <h2><b><!-- {{$t("article.title")}} -->{{Article.title}}</b></h2>
    </div>
    <div class='author'>
      <span>{{$t("article.author")}} : <i>{{Article.author}}</i></span>
    </div>
    <div class="content">
      <!-- {{$t("article.content")}} -->
      {{Article.content}}
      <p>
        fgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditorfgdhgfdhghg欢迎使用ueditor
      </p>
      <p>
          欢迎使用ueditor
      </p>
      <p>
          欢迎使用ueditor
      </p>
      <p>
          欢迎使用ueditor
      </p>
    </div>
    <div class="cover-div cover"></div>
    <el-button type="primary" style="margin-bottom: 0px" @click="ShowAllContent(Article.article_id)" plain>{{$t("button.view_all")}}</el-button>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: ['article'],
  data: function () {
    return {Article: this.article}
  },
  methods: {
    ShowAllContent: function (articleId) {
      this.$router.push({name: 'article', params: { id: articleId }}) // -> /user/123
    }
  }
  // props: ['article']
  // data () {
  //   return {
  //     msg: this.$t('message.title')
  //   }
  // },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 80%;
  min-width: 300px;
  height:600px;
  margin: 20px auto;
  padding: 0px 0px;
  /*background-color: #f00;*/
  border-top: 2px solid #fbfbfb;
  border-bottom: 3px solid #fbfbfb;
  border-radius: 3px;
  transition: .2s;
}
/*.hello:hover{
  box-shadow:0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)
}*/
.title{
  height: 50px;
  display: inline-block;
}
.cover{
  background: -webkit-linear-gradient(rgba(255,0,0,0), rgba(0,0,0,1)); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(rgba(255,0,0,0), rgba(0,0,0,1)); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(rgba(255,0,0,0), rgba(0,0,0,1)); /* Firefox 3.6 - 15 */
  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)); /* 标准的语法（必须放在最后） */
}
.cover-div{
  position: relative;
  margin-top: -220px;
  z-index: 100;
  width: 100%;
  height: 250px;
}
.author{
  width:90%;
  height: 30px;
  vertical-align: middle;
  text-align: right;
  padding: 0px 10px;
}
.content{
  width: 90%;
  height: 400px;
  margin: 0px auto;
  overflow: hidden;
  word-wrap:break-word;
  text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  /*text-align: ;*/
}

</style>
