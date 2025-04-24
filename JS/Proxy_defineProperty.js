//Proxy 可以拦截和定义object的所有基本操作，所有对象的方法最终都要回归到基本操作如set, get等
//Object.defineProperty 只能定义指定属性的操作
const person = []
Object.defineProperty(person, 'age', {
  get() {
    console.log('get');
    return this._age;
  },
  set(value) {
    console.log('set')
    this._age = value;
    return value
  }
});
person.push(1)

const s = new Proxy([], {
  get(target, key, receiver) {
    console.log(target, key, receiver)
    return target[key]
  },
  set(target, key, value, receiver) {
    console.log(target, key, value, receiver)
    target[key] = value
    return true;
  }
})
s.push(1)

// const arr = [1,2,3]
// const p = new Proxy(arr, {
//   get(target, key, receiver) {
//     console.log(target, key, receiver)
//     return target[key]
//   },
//   set(target, key, value, receiver) {
//     console.log(target, key, value, receiver)
//     target[key] = value;
//     return true
//   }
// })
// p.push(1)

