<template id='Index'>
  <div class="hello">
    <div class="article-frame">
      <div  v-for="article in articles" :key="article.num">
        <ArticlePreview :article='article'></ArticlePreview>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview'
var articles = [
  {
    'article_id': '10001001',
    'title': 'CSS3过度效果及动画—总结',
    'content': 'bbbbb',
    'datetime': '2018/04/07 11:11:22',
    'author': 'zeno'
  },
  {
    'article_id': '10001002',
    'title': 'bbbb',
    'content': 'ccccc',
    'datetime': '2018/04/07 22:11:22',
    'author': 'jasonsama'
  },
  {
    'article_id': '10001003',
    'title': 'bbbb',
    'content': 'ccccc',
    'datetime': '2018/04/07 22:11:22',
    'author': 'jasonsama'
  },
  {
    'article_id': '10001003',
    'title': 'bbbb',
    'content': 'ccccc',
    'datetime': '2018/04/07 22:11:22',
    'author': 'jasonsama'
  },
  {
    'article_id': '10001004',
    'title': 'bbbb',
    'content': 'ccccc',
    'datetime': '2018/04/07 22:11:22',
    'author': 'jasonsama'
  },
  {
    'article_id': '10001001',
    'title': 'bbbb',
    'content': 'ccccc',
    'datetime': '2018/04/07 22:11:22',
    'author': 'jasonsama'
  }
]
console.log(articles)
export default {
  name: 'Index',
  components: {
    ArticlePreview
  },
  data: function () {
    return {articles: articles}
  }
  // data () {
  //   return {
  //     msg: this.$t('message.title')
  //   }
  // },
  // methods: {
  //   changeLocale () {
  //     let locale = this.$i18n.locale
  //     locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-frame{
  width: 80%;
  max-width: 900px;
  margin:0px auto 20px auto;
  padding: 10px 0px;
  /*background-color: #0f0;*/
  min-width: 300px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  /*box-shadow:0 0 8px 0 rgba(232,237,250,.6),0 2px 4px 0 rgba(232,237,250,.5)*/
  box-shadow: 0 0px 0px 0 rgba(232,237,250,.6), 10px 10px 10px 0 rgba(232,237,250,.5)
}
.article-frame:hover{
}
</style>
