// most.js
// 
export default {
    run: (input) => {
        const map = new Map();

        for(let item of input){
            if(map.get(item)){
                map.set(item, map.get(item) + 1);
            }else{
                map.set(item, 1)
            }
        }
        let res, max=0;
        map.forEach((v, k) => {
            if(v > max || (v === max && k > res)){
                max = v;
                res = k;
            }
        })
        return res;
    },
    tests: [
        {
            input: [1,2,34,5,6,2,34],
            expected: 34,
            description: ""
        },
        {
            input: [1,2,3,4,5,6,7],
            expected: 7,
            description: ""
        }
    ]
}