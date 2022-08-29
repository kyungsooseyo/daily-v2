<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <own-directive></own-directive>
  </div>
</template>

<script>
import OwnDirective from './components/OwnDirective.vue'
export default {
  name: 'App',
  components: {
    OwnDirective
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
