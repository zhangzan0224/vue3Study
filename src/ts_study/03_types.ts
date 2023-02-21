// 可以使用字面量的方式去定义一个
let a: 10;
// a = 20
// 但是字面量的方式不是很好

// 可以使用 | 连接多个类型
let sex: 'male' | 'female';
// sex = 'abc' 报错

let c: number | string;

// 未知类型 unknown 类型安全的 unknown 不能赋值给其他的
let abc: unknown

abc = '1'
// c =abc unknown类型的变量不能直接赋值给其他的变量
if(typeof  abc === 'string'){
  c = abc
  console.log(c)
}
/** 类型断言
 *  变量 as类型
 *  <类型>
 * */
c = abc as string
c = <string>abc
