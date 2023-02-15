<template>
    <suspense>
      <!-- 网速慢的时候， -->
      <template v-slot:default>
        <SetupDemo/> 
      </template>
      <template v-slot:fallback>
        <h3>加载中....</h3>
      </template>
    </suspense> 
  </template>
  
  <script>
  // import HelloWorld from './components/HelloWorld.vue'
  // import TestRefVue from "./components/TestRef.vue";
  // import ParentTemp from './testEmit/ParentTemp.vue'
  // import SetupDemo from '@/testsetup/SetupDemo'  // 静态引入
  import { defineAsyncComponent} from 'vue'
  const SetupDemo = defineAsyncComponent(() => import('@/testsetup/SetupDemo.vue')) // 动态引入
  export default {
    name: 'App',
    components: { SetupDemo }
  }
  </script>
  
  <style>

  </style>
  