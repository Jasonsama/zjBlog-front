<template>
  <div class="hello">
    {{$t("message.about")}}
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'About'
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

</style>
