// find_median.js
// 
export default {
    run: () => {
        //generate a list of random numbers
        let numbers = [];
        for (let i = 0; i < 1000000; i++) {
            numbers.push(Math.floor(Math.random() * 10000));
        }
        // find median number
        const findMed = (list, targetInd) => {
            if(list.length === 1){
                return list[0];
            };
            const pivot = list[0];
            const left = [];
            const right = [];
            for (let i = 1; i < list.length; i++) {
                if (list[i] < pivot) {
                    left.push(list[i]);
                } else {
                    right.push(list[i]);
                }
            }
            if (left.length === targetInd) {
                return pivot;
            } else if (left.length > targetInd) {
                return findMed(left, targetInd);
            } else {
                return findMed(right, targetInd - left.length - 1);
            }
        }
        console.log(numbers);
        if(numbers.length % 2 === 0){
            return (findMed(numbers, Math.floor(numbers.length / 2)) + findMed(numbers, Math.floor(numbers.length / 2) - 1)) / 2;
        }
        return findMed(numbers, Math.floor(numbers.length / 2));
    },
    tests: [
        {
            input: "",
            expected: "",
            description: ""
        },
        {
            input: "",
            expected: "",
            description: ""
        }
    ]
}
