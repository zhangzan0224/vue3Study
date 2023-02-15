<template>
  <div class="container">
    <span>SetupDemo</span>
    <h3>{{ sum }}</h3>
  </div>
</template>
<script>
// import { reactive, toRefs, onBeforeMount, onMounted } from "vue";

import { ref } from 'vue'
export default {
  name: 'SetupDemo',
  setup(props, context) {
    console.log('====================================')
    console.log(props, context)
    console.log('====================================')
    let sum = ref(0)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000)
    })
  }
}
</script>
<style lang="scss" scoped></style>
