// spell.js
// spell out all possible words using chars in the given string, each char can only be used once, count the number
export default {
    run: (input) => {
        const [str, words] = input;
        let result = 0;
        const map = new Map();
        for(let char of str) {
            map.set(char, (map.get(char) || 0) + 1);
        };
        for(let word of words) {
            let mapCopy = new Map(map);
            let flag = true;
            for(let char of word) {
                if(mapCopy.get(char) > 0) {
                    mapCopy.set(char, mapCopy.get(char) - 1);
                }else if(mapCopy.get('?') > 0){
                    mapCopy.set('?', mapCopy.get('?') - 1);
                }else{
                    flag = false;
                    break;
                }
            }
            if(flag){
                result++;
            }
        }
        return result;
    },
    tests: [
        {
            input: ["atach??", ["cat", "bt", "hat", "tree"]],
            expected: 3,
            description: ""
        },
        {
            input: ["welldonehoneyr", ["hello", "world", "cloud"]],
            expected: 2,
            description: ""
        },
        {
            input: ["welldonapplec?", ["apple", "car", "window"]],
            expected: 2,
            description: ""
        }
    ]
}
