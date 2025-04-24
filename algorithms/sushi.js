// sushi.js
// get next sushi for free, the prize should be lesser than the current one
export default {
    run: (str) => {
        const sushi = str.split(" ").map(Number);
        const result = [];
        for(let i = 0; i < sushi.length; i++){
            let next = 0;
            for(let j = i+1; j < sushi.length + 1; j++){
                const index = j % sushi.length;
                if(sushi[index] < sushi[i]){
                    next = sushi[index];
                    break;
                }
            }
            result.push(next ? next + sushi[i] : sushi[i]);
        }
        return result.join(" ");
    },
    tests: [
        {
            input: "3 14 15 6 5",
            expected: "3 20 21 11 8",
            description: ""
        },
        {
            input: "3 24 5 14 2 2 4",
            expected: "5 29 7 16 2 2 7",
            description: ""
        },
        {
            input: "3",
            expected: "3",
            description: ""
        }
    ]
}
