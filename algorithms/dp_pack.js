// dp_pack.js
// get max value from the pack with limited load 
export default {
    run: (input) => {
        const [load, n] = input[0];
        const items = input[1];
        const dp = new Array(n + 1).fill(0).map(()=> new Array(load + 1).fill(0));
        for (let i = 1; i < n + 1; i++) {
            const [weight, price] = items[i - 1];
            for (let j = 1; j < load + 1; j++) {
                if(j >= weight){
                    dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight] + price * weight)
                }else{
                    dp[i][j] = dp[i-1][j];
                }
            }
        }
        return dp[n][load];
    },
    tests: [
        {
            input: [[10, 4], [[8, 2],[3, 4],[2, 1],[7, 1]]],
            expected: 19,
            description: ""
        },
        {
            input: [[10, 3], [[5, 3],[8, 1],[2, 4]]],
            expected: 23,
            description: ""
        }
    ]
}