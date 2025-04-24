// min_rect.js
// find min width rectangle that contains all the given numbers, return the width
// if not found, return -1
export default {
    run: (input) => {
        const [rect, target] = input;
        const height = rect.length;
        const width = rect[0].split(' ').length;
        let minRes = -1;
        for(let i = 0; i < width; i++) {
            for(let j = i; j < width; j++) {
                //check if it contains all in target
                const map = new Map();
                for(let k = 0; k < height; k++) {
                    for(let s of rect[k].split(' ').slice(i, j+1)){
                        if(map.has(s)){
                            map.set(s, map.get(s) + 1);
                        }else{
                            map.set(s, 1);
                        }
                    }
                }
                const targetMap = new Map();
                for(let s of target.split(' ')){
                    if(targetMap.has(s)){
                        targetMap.set(s, targetMap.get(s) + 1);
                    }else{
                        targetMap.set(s, 1);
                    }
                }
                let found = true;
                for(let [key, value] of targetMap){
                    if(!map.has(key) || map.get(key) < value){
                        found = false;
                        break;
                    }
                }
                if(found){
                    if(minRes === -1){
                        minRes = j - i + 1;
                    }else{
                        minRes = Math.min(minRes, j - i + 1);
                    }
                }
            }
        }   
        return minRes;
    },
    tests: [
        {
            input: [['1 2 2 3 1', '2 3 2 3 2'], '1 2 3'],
            expected: 2,
            description: ""
        },
        {
            input: [['1 2 2 3 1', '1 3 2 3 4', '0 0 0 0 0'], '1 1 4'],
            expected: 5,
            description: ""
        },
        {
            input: [['1 2 2 3 1', '1 3 2 3 4'], '3 4 4'],
            expected: -1,
            description: ""
        }
    ]
}
