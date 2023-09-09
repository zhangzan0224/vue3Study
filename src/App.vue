<template>y
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <TestRefVue></TestRefVue>
  <ParentTemp></ParentTemp> -->
  <router-view></router-view>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TestRefVue from "./components/TestRef.vue";
// import ParentTemp from './testEmit/ParentTemp.vue'
// import SetupDemo from '@/testsetup/SetupDemo'  // 静态引入
// import { defineAsyncComponent} from 'vue'
// const SetupDemo = defineAsyncComponent(() => import('@/testsetup/SetupDemo.vue')) // 动态引入
export default {
  name: 'App',
  components: {  }
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
