const memorize = function (func, content){
  let cache = Object.create(null);
  content = content || this;
  return (...key) => {
    if(!cache[key]){
      console.log('no cache')
      cache[key] = func.apply(content, key);
    }
    return cache[key];
  }
}

const add = (...args) => {
  return args.reduce((a, b) => a + b);
}

const calc = memorize(add);
console.log(calc(1,2,3,4,5));
console.log(calc(1,2,3,4,5));