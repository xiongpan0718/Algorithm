// neighbor.js
// 
export default {
    run: (input) => {
        const [num1, num2, list] = input;
        const index1 = list.indexOf(num1);
        const index2 = list.indexOf(num2);
        return Math.abs(index1 - index2) === 1
    },
    tests: [
        {
            input: [1,2,[3,4,5,6,7,8,1,2,9]],
            expected: true,
            description: ""
        },
        {
            input: [1,2,[3,4,5,6,7,8,1,10,2,9]],
            expected: false,
            description: ""
        }
    ]
}