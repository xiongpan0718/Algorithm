// dp_routes.js
// find all routes from topleft to rightbottom of an n * m map
export default {
    run: (input) => {
        const [m, n] = input;
        const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
            }
        }
        return dp[m - 1][n - 1];
    },
    tests: [
        {
            input: [2, 2],
            expected: 2,
            description: ""
        },
        {
            input: [3, 3],
            expected: 6,
            description: ""
        }
    ]
}