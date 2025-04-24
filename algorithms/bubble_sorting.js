// bubble_sorting.js
export default {
    run: (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },
    tests: [
        {
            input: [5, 3, 8, 4, 6],
            expected: [3, 4, 5, 6, 8],
            description: 'Should sort the array in ascending order'
        },
        {
            input: [1],
            expected: [1],
            description: 'Should handle single element array'
        },
        {
            input: [],
            expected: [],
            description: 'Should handle empty array'
        }
    ]
}
