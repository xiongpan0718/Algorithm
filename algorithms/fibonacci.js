// fibonacci.js
export default {
    run: (n) => {
        const sequence = [0, 1];
        for(let i = 2; i < n; i++) {
            sequence[i] = sequence[i-1] + sequence[i-2];
        }
        return sequence;
    },
    tests: [
        {
            input: 5,
            expected: [0, 1, 1, 2, 3],
            description: 'Should generate first 5 Fibonacci numbers'
        },
        {
            input: 3,
            expected: [0, 1, 1],
            description: 'Should generate first 3 Fibonacci numbers'
        }
    ]
}
