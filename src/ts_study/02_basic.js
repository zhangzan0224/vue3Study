// 声明一个num为number类型,只能是数字类型
// let num: number = 123;
// let arr: number[] = [1, 2, 3]
// console.log(num)
// console.log(...arr)
// @ts-ignore
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 2))

// const abc = [1, 1, 2, 4, 2, 4, 3, 2, 3]
// const bcd = [...abc]

// for (let i = 0; i < bcd.length; i++) {
//   for (let j = i + 1; j < bcd.length; j++) {
//     if (bcd[i] === bcd[j]) {
//       console.log(j)
//       bcd.splice(j, 1)
//       j--
//       console.log(j)
//     }
//   }
// }
// 对比两个数组去重
const arr = [
  { a: 1, b: 2 },
  { b: 2, a: 1 },
  { a: 1, b: 2, c: { a: 1, b: 2 } },
  { b: 2, a: 1, c: { b: 2, a: 1 } }
]
const bcd = [...arr]
for (let i = 0; i < bcd.length; i++) {
  for (let j = i + 1; j < bcd.length; j++) {
    if (equals(bcd[i], bcd[j])) {
      bcd.splice(j, 1)
      j--
    }
  }
}
// 对比两个是否相同
function isObj(val) {
  return typeof val === 'object' && val !== null
}
function equals(val1, val2) {
  // 两个都是对象的情况下
  if (isObj(val1) && isObj(val2)) {
    let key1 = Object.keys(val1)
    let key2 = Object.keys(val2)
    if (key1.length !== key2.length) {
      return false
    }
    for (let k of key1) {
      if (!key2.includes(k)) {
        return false
      }
      if (!equals(val1[k], val2[k])) {
        return false
      }
    }
    return true
  } else {
    return val1 === val2
  }
}
console.log(bcd)
