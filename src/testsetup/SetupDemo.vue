<template>
  <div class="container">
    <span>abc</span>
  </div>
</template>
<script>
// import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "SetupDemo",
  setup(props, context) {
    console.log("====================================");
    console.log(props, context);
    console.log("====================================");
  },
};
</script>
<style lang="scss" scoped></style>
