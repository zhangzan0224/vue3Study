// list ⇒ 数组
// type ⇒ 要删除的key
function deleteKey(list, type) {
  for (let item of list) {
    let obj = item;
    for (var key in obj) {
      if (key === type) {
        delete obj[key];
      }
    }
  }
  return list;
}

const arr = [
  { a: 1, is: 2 },
  { b: 1, is: 2 },
];

console.log(deleteKey(arr,'is'));