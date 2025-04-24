// skip4.js
// skip all 4s when price is increasing
// e.g. 14 -> 15, 39 -> 50, etc.
// return real price
export default {
    run: (bill) => {
        let count = 0;
        for(let i = 1; i <= bill; i++) {
            const str = i.toString();
            if(str.includes('4')) {
                count++;
            }
        }
        return bill - count;
    },
    tests: [
        {
            input: 5,
            expected: 4,
            description: ""
        },
        {
            input: 100,
            expected: 81,
            description: ""
        }
    ]
}
