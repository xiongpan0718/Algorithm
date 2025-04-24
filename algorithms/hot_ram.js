// hot_ram.js
// return all hot rams being visited over the given threshold
export default {
    run: (input) => {
        const [n, arr] = input;
        const array = arr.split(" ");
        const map = new Map();
        const result = [];
        for(let char of array){
            if(map.has(char)){
                map.set(char, map.get(char) + 1);
            }else{
                map.set(char, 1);
            }
            if(map.get(char) >= n){
                result.push(char)
            }
        }
        return result.length ? [result.length, result.join(" ")] : [0];
    },
    tests: [
        {
            input:[5,"1 2 1 2 1 2 1 2 1 2"],
            expected: [2, "1 2"],
            description: ""
        },
        {
            input: [5,"1 2 3 4 5"],
            expected: [0],
            description: ""
        }
    ]
}
