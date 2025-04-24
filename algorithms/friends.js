// friends.js
// find the closest index of the number from the rest of the list for each item
export default {
    run: (str) => {
        const list = str.split(' ').map(Number);
        const result = [];
        for (let i = 0; i < list.length; i++) {
            let res = 0;
            for (let j = i + 1; j < list.length; j++) {
                if (list[j] > list[i]) {
                    res = j;
                    //stop the loop
                    break;
                }
            }
            result.push(res);
        }
        return result.join(' ');
    },
    tests: [
        {
            input: "100 95",
            expected: "0 0",
            description: 'Should return 0 0'
        },
        {
            input: "123 124 125 121 119 122 126 123",
            expected: "1 2 6 5 5 6 0 0",
            description: 'Should return 1 2 6 5 5 6 0 0'
        }
    ]
}
