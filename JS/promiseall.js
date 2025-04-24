//promiseall
const promise1 = Promise.resolve('hello world');
const promise2 = { j: 1 };
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'goodbye');
});

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      //if promise is not a promise, convert it to a promise
      if (!(promises[i] instanceof Promise)) {
        results[i] = promises[i];
        count++;
        if (count === promises.length) {
          resolve(results);
        }
      } else {
        promises[i].then((value) => {
          results[i] = value;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        }).catch((error) => {
          reject(error);
        });
      }
    }
  });
}
PromiseAll([promise1, promise2, promise3]).then(values => console.log('PromiseAll:', values));