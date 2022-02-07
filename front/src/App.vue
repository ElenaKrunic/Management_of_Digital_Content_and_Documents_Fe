<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
    <Footer/>
  </div>

</template>

<script>
import Navigation from '../src/TheNavigation.vue';
import Footer from '../src/views/footer/Footer.vue'
//import Login from '../src/views/login/Login.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>

</style>
