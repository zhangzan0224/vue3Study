// 对象类型
/* 对象类型可以声明包含哪些属性
 * 采用?代表该属性可有可无,
 * [propName: string] : any
 * */
let student: { name: string; age?: number }
student = { name: '孙悟空' }
// 必须得有一个名字属性
let obj1: { name: string; [propName: string]: any }
obj1 = { a: 1, c: 1, name: '猪八戒' } //ｎａｍｅ必须得有

/* 定义函数类型的
 * (形参: 类型 , 形参:类型 , ...) =>　返回值：类型
 * */
let d: (a1: number, a2: number) => number
d = function (n1, n2) {
  return n1 + n2
}
//　数组
let arr1: number[] // 或者
let arr2: Array<number>

// 元祖就是长度固定的数组
/*
 *   元组，元组就是固定长度的数组
 *       语法：[类型, 类型, 类型]
 * */
let tupleOne: [number, string]
tupleOne = [1, '1']

// 枚举类
// 可以将固定的去进行赋值,在设置类型的时候采用枚举类,一目了然知道是男还是女
enum Gender {
  Male,
  Female
}
console.log(Gender.Male)
let stud: {
  name: string
  gender: Gender
}

stud = { name: '唐三藏', gender: Gender.Male }

/* & 代表同时满足*/
let ac: { name: string } & { age: number }
ac = { name: '张三', age: 18 }

/* 类型的别名*/
type myType = 1 | 2 | 3 | 4 | 5
let type1: myType
