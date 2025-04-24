// sum_of_pow.js
// find 2 numbers, the sum of squares is target number
export default {
    run: (input) => {
        const n = Math.sqrt(input);
        let res = false;
        for(let i = 1; i< n; i++ ) {
            for( let j = 1; j < n; j++ ) {
                console.log(i,j)
                if( i * i + j * j == input ) {
                    res = true;
                    break;
                }
            }
        }
        return res;
    },
    tests: [
        {
            input: 5,
            expected: true,
            description: ""
        },
        {
            input: 11,
            expected: false,
            description: ""
        }
    ]
}