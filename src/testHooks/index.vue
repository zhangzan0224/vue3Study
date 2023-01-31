<template>
  <div class="container">
    <h1>打点操作</h1>
    <span>当前鼠标的位置x:{{ point.x }},y:{{ point.y }}</span>
  </div>
</template>
<script>
// import { reactive, toRefs, onBeforeMount, onMounted, onUnmounted } from "vue";
import usePoint from "../hooks/point";
export default {
  name: "TestHooks",
  setup() {
    const point = usePoint();
    return { point };
  },
};
</script>
<style lang="scss" scoped></style>
