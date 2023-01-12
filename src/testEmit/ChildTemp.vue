<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <div>
      <input type="text" v-model.number="num" />
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";

// 1、定义的属性
const num = ref(0);

// 2、定义发射给父组件的方法
const emits = defineEmits(["add1", "decre1"]);

// 3、定义新增和递减计数方法
const increment = () => {
  num.value++;
  emits("add1", num.value);
};

const decrement = () => {
  num.value--;
  emits("decre1", num.value);
};
</script>
