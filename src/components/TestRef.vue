<template>
  <div>
    <button @click="showName">点我</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const userName = ref("zhangsan");
    const showName = () => {
      alert(`我叫${userName.value}`);
    };
    return {
      userName,
      showName
    };
  },
};
</script>
<style lang="less"></style>
