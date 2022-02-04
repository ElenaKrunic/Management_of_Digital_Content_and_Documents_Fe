<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '../src/TheNavigation.vue';
//import Login from '../src/views/login/Login.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>

</style>
