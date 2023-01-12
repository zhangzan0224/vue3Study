<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <TestRefVue></TestRefVue>
  <ParentTemp></ParentTemp>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TestRefVue from "./components/TestRef.vue";
import ParentTemp from './test_emit/ParentTemp.vue'
export default {
  name: "App",
  components: {
    TestRefVue,ParentTemp
  },
};
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
