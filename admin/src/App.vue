<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div> -->
    <!-- <Main msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import Main from './views/Main.vue'
import './style.css'
export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
