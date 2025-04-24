// dp_pack2.js
// get max value from the pack with limited load, main & accessories
export default {
    run: (input) => {
        const [load, n] = input[0];
        const items = input[1];
        const dp = new Array(n + 1).fill(0).map(() => new Array(load + 1).fill(0))
        let res = 0
        for (let i = 1; i < n + 1; i++) {
            for (let j = 1; j < load + 1; j++) {
                const [weight, price, depend] = items[i - 1];
                if (depend === 0) {
                    if (j >= weight) {
                        //collect accessories
                        const acc = items.filter((item) => item[2] === i);
                        //0 acc
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + price * weight)
                        if (acc[0] && j >= weight + acc[0][0]) {
                            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - weight - acc[0][0]] + price * weight + acc[0][1] * acc[0][0])
                        }
                        if (acc[1] && j >= weight + acc[1][0]) {
                            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - weight - acc[1][0]] + price * weight + acc[1][1] * acc[1][0])
                        }
                        if (acc[0] && acc[1] && j >= weight + acc[0][0] + acc[1][0]) {
                            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - weight - acc[0][0] - acc[1][0]] + price * weight + acc[0][1] * acc[0][0] + acc[1][1] * acc[1][0])
                        }
                        console.log(dp)
                        res = Math.max(res, dp[i][j])
                    } else {
                        dp[i][j] = dp[i-1][j]
                    }
                } else {
                    dp[i][j] = dp[i-1][j]
                }
            }
        }
        return res;
    },
    tests: [
        {
            input: [[8, 5], [[2, 3, 0], [1, 4, 3], [4, 1, 0], [1, 1, 3], [3, 1, 0]]],
            expected: 9,
            description: ""
        },
        {
            input: [[5, 3], [[2, 3, 0], [4, 1, 0], [1, 4, 2]]],
            expected: 8,
            description: ""
        },
        {
            input: [[5, 5], [[2, 3, 5], [2, 3, 5], [1, 3, 0], [1, 2, 0], [1, 1, 0]]],
            expected: 13,
            description: ""
        },
        {
            input: [[10, 5], [[8, 2, 0], [4, 5, 1], [2, 5, 1], [4, 3, 0], [5, 2, 0]]],
            expected: 26,
            description: ""
        },
        {
            input: [[10, 5], [[3, 5, 0], [4, 2, 0], [3, 5, 2], [3, 4, 2], [6, 4, 0]]],
            expected: 39,
            description: ""
        },
    ]
}