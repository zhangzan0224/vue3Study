<template>
  <div>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
    <div>
      <input type='text' v-model.number='num' />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  emits: ['add1', 'decre1'],
  setup(props, { emit }) {
    // 1、定义的属性
    const num = ref(0)
    // 3、定义新增和递减计数方法
    const increment = () => {
      num.value++
      emit('add1', num.value)
    }

    const decrement = () => {
      num.value--
      emit('decre1', num.value)
    }
    return { num, increment, decrement }
  }
}
</script>
