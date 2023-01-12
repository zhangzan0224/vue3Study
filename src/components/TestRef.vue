<template>
  <div>
    <button @click="showName">点我</button>
    <button @click="changeName">修改</button>
  </div>
</template>
<script>
import { ref , reactive} from "vue";
export default {
  setup() {
    const userName = ref("zhangsan");
    const job =  reactive({
      type:'前端工程师',
      salary:'30K'
    })
    const showName = () => {
      alert(`我叫${userName.value},我的工作是${job.type}`);
    };
    const changeName = () => {
      console.log(userName);
    };
    return {
      userName,
      showName,
      changeName,
      job
    };
  },
};
</script>
<style lang="less"></style>
