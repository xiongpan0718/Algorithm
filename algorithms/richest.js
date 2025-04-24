// richest.js
// find the richest small family
export default {
    run: (input) => {
        const [wealth, families] = input;
        let max = 0;
        // create a family map, key is 1,2,3,... until the length of wealth, value should be an array with its wealth by default, 100, 200, ...
        const familyMap = new Map(wealth.map((w, i) => [i + 1, w]));
        for (const [i, j] of families) {
            familyMap.set(i, familyMap.get(i) + wealth[j-1])
        }
        max = Math.max(...familyMap.values());
        // for (const [, w] of familyMap) {
        //     if (w > max) max = w;
        // }
        return max;
    },
    tests: [
        {
            input: [[100, 200, 300, 500], [[1, 2], [1, 3], [2, 4]]],
            expected: 700,
            description: ""
        },
        {
            input: [[100, 200, 300, 500], [[1, 2], [1, 3], [1, 4]]],
            expected: 1100,
            description: ""
        }
    ]
}
