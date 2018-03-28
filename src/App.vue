<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Home></Home>
    <router-view/>
  </div>
</template>

<script>
// import Login from './components/Login'
import Home from '@/components/Home'
export default {
  name: 'App',
  components: {Home}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
