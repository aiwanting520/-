<template>
  <div id="app">
    <router-view/>
    <FootGuide/>
  </div>
</template>

<script>
import FootGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components: {
    FootGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
