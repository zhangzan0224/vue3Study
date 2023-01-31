<template>
  <div class="container">
    <h2>当前的和是:{{ sum }}</h2>
    <button @click="sum++">点我</button>
    <h2>当前的信息是{{ msg }}</h2>
    <button @click="msg += '!'">点我1</button>
    <hr />
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>薪资:{{ person.job.j1.salary }}K</h2>
    <button @click="person.name += '~'">点我变化年龄</button>
    <button @click="person.age++">年龄++</button>
    <button @click="person.job.j1.salary++">薪资++</button>
  </div>
</template>
<script>
import { ref, watch, reactive } from "vue";
export default {
  name: "TestWatch",
  setup() {
    let sum = ref(0);
    let msg = ref("你好啊");
    const person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    /* 监视情况1,ref定义的数据 */
    watch(sum, (newVal, oldVal) => {
      console.log("sum的值变化了", newVal, oldVal);
    });
    /* 监视情况2 ref定义的多个数据 */
    watch([sum, msg], (newVal, oldVal) => {
      console.log("sum或者msg的值变化了", newVal, oldVal);
    });
    /* 监视情况3 监控reactive定义的响应数据 , ! 1 ,强制开启了深度监听,2 无法拿到老的数据 */
    watch(
      person,
      (newVal, oldVal) => {
        console.log("person的值变化了", newVal, oldVal);
      }
      // { deep: false }
    );
    /* 监视情况4 监控reactive定义的响应数据中的某个属性得写成返回函数,这时可以拿到新的和老的数据*/
    watch(
      () => person.age,
      (newVal, oldVal) => {
        console.log("person的年龄值变化了", newVal, oldVal);
      }
    );
    /* 监视情况5 监控reactive定义的响应数据中的某些属性得写成返回函数,这时可以拿到新的和老的数据*/
    watch([() => person.age, () => person.name], (newVal, oldVal) => {
      console.log("person的年龄或者名字发生值变化了", newVal, oldVal);
    });
    // 特殊情况,监控比较深层次的reactive定义下的响应式数据,需开启深度监听
    watch(
      () => person.job,
      (newVal, oldVal) => {
        console.log("person的job发生值变化了", newVal, oldVal);
      },
      {
        deep: true, // !这时候开启深度监听,无法监控到老的数据
      }
    );
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
<style lang="scss" scoped></style>
