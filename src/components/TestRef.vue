<template>
  <div>
    <button @click="showName">点我</button>
    <button @click="changeName">修改</button>
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
    const changeName = () => {
      console.log(userName);
    };
    return {
      userName,
      showName,
      changeName,
    };
  },
};
</script>
<style lang="less"></style>
