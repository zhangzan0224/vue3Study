<template>
  <h2>当前计数为： {{ counter }}</h2>
  <ChildTemp @add1='add1' @decre1='decre1'></ChildTemp>
</template>
<script>
import { ref } from 'vue'
import ChildTemp from './ChildTemp.vue'

export default {
  setup() {
    // 1、定义的属性
    const counter = ref(0)

    // 2、定义的方法
    const add1 = (payload) => {
      counter.value = payload
    }
    const decre1 = (payload) => {
      counter.value = payload
    }
    return { counter, add1, decre1 }
  },
  components: { ChildTemp }
}
</script>
