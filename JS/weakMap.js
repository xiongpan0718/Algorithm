const map = new Map();
const weakMap = new WeakMap();

(()=>{
    const a = {a:1};
    const b = {b:2};
    map.set(a,'a');
    weakMap.set(b,'b');
    // weakMap.set('aaa','b'); // error
    // console.log(map.get(a));
    // console.log(weakMap);
})()

console.log(map.keys());
console.log(weakMap);
