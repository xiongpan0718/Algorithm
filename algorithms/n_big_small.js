// n_big_small.js
// caculate sum of the topN max and topN min, if same value exists in both, return -1
// number should not duplicate
export default {
    run: (input) => {
        const n = Number(input[0]);
        const arr = new Set(input[1].split(" ").map(Number));
        const sorted = Array.from(arr).sort((a, b)=>a-b);
        // const sorted = [];
        // for(let num of arr){
        //     if(sorted.length===0){
        //         sorted.push(num);
        //         continue;
        //     }
        //     for(let i=0; i<sorted.length; i++){
        //         if(num<sorted[i]){
        //             sorted.splice(i, 0, num);
        //             break;
        //         }
        //         if(num===sorted[i]){
        //             break;
        //         }
        //         if(i===sorted.length-1){
        //             sorted.push(num);
        //             break;
        //         }
        //     }
        // }
        console.log(sorted);
        let maxN = sorted.slice(-n);
        let minN = sorted.slice(0, n);
        console.log(maxN, minN);
        let sum = -1;
        if(Math.min(...maxN)>Math.max(...minN)){
            sum = maxN.reduce((a,b)=>a+b,0) + minN.reduce((a,b)=>a+b,0)
        }
        return sum;
    },
    tests: [
        {
            input: [2, "95 88 83 64 100"],
            expected: 342,
            description: ""
        },
        {
            input: [2, "3 2 3 4 2"],
            expected: -1,
            description: ""
        }
    ]
}
