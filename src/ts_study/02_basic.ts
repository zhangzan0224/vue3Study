// 声明一个num为number类型,只能是数字类型
// let num: number = 123;
// let arr: number[] = [1, 2, 3]
// console.log(num)
// console.log(...arr)

// @ts-ignore https://stackoverflow.com/questions/63613644/fixing-ts2688-cannot-find-type-definition-file-in-node-modules
function sum(a: number, b: number): number{
  return a + b;
}
console.log(sum(1,2))
