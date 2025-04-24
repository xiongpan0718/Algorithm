// median_of_most.js
// find the median number of most frequently ocurring numbers in an array
export default {
    run: (str) => {
        const list = str.split(' ').map(Number);
        const dict = {};
        const result = [];
        for (let item of list) {
            if (dict[item]) {
                dict[item]++;
            } else {
                dict[item] = 1;
            }
        }
        Object.entries(dict).forEach(([key, value]) => {
            if (value === Math.max(...Object.values(dict))) {
                result.push(key);
            }
        });
        result.sort((a, b) => a - b);
        if(result.length % 2 === 0){
            return String((Number(result[result.length / 2]) + Number(result[result.length/2 - 1])) / 2);
        }else{
            return result[(result.length - 1) / 2];
        };
    },
    tests: [
        {
            input: "10 11 21 19 21 17 21 16 21 18 15",
            expected: "21",
            description: 'Should return 21'
        },
        {
            input: "2 1 5 4 3 3 9 2 7 4 6 2 15 4 2 4",
            expected: "3",
            description: 'Should return 3'
        },
        {
            input: "1 2 3 4 5 6 8 6 5 4 3 2 1",
            expected: "3.5",
            description: 'Should return 3.5'
        }
    ]
}
