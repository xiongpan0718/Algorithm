function throttle(func, wait) {
    let lastTime = 0;
    return function() {
        const now = Date.now();
        if (now - lastTime >= wait) {
            func.apply(this, arguments);
            lastTime = now;
        }
    }
}

function wow() {
    console.log('wow' + arguments[0])
}

const throttleWow = throttle(wow, 1000);
throttleWow(1);
setTimeout(()=>throttleWow(2), 900) //skipped
setTimeout(()=>throttleWow(3), 1500)