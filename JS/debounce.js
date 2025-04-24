function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          clearTimeout(timeout);
          func.call(this, ...arguments);
      }, wait);
    };
}

function wow() {
    console.log('wow' + arguments[0])
}

const debouncedWow = debounce(wow, 1000);
debouncedWow(1);
setTimeout(()=>debouncedWow(2), 500)
setTimeout(()=>debouncedWow(3), 1600)