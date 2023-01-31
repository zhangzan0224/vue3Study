<template>
  <div class='container'>
    <h1>测试计算属性</h1>
    姓:<input type='text' v-model='person.firstName' />
    <br />
    名:<input type='text' v-model='person.lastName' />
    <br />
    <span>{{ person.fullName }}</span>
    <br />
    全名:<input type='text' v-model='person.fullName' />
  </div>
</template>
<script>
import { reactive, computed } from 'vue'

export default {
  name: 'ComputedCom',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })
    // 简写形式,未考虑设置的形式

    /* person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    }); */
    // 复杂形式
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const tempArr = value.split('-')
        person.firstName = tempArr[0]
        person.lastName = tempArr[1]
      }
    })
    return { person }
  }
}
</script>
<style lang='scss' scoped></style>
