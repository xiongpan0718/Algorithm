// find_mates.js
// each kid tells how many classmates else are in their community, calculate the minimum number of students in the class
export default {
    run: (str) => {
        const list = str.split(' ');
        const dict = new Map();
        for (let item of list) {
            if (dict.has(item)) {
                dict.set(item, dict.get(item) + 1);
            } else {
                dict.set(item, 1);
            }
        }
        let result = 0;
        for (let [key, value] of dict) {
            if(parseInt(key) + 1 < value) {
                result += Math.ceil(value / (parseInt(key) + 1)) * (parseInt(key) + 1);
            }else{
                result += parseInt(key) + 1;
            }
        }
        return result.toString();
    },
    tests: [
        {
            input: "2 2 3",
            expected: "7",
            description: "Should return 7"
        },
        {
            input: "3 1 1 1 3 2",
            expected: "11",
            description: "Should return 11"
        }
    ]
}
