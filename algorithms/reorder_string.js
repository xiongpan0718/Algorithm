// reorder_string.js
// 
export default {
    run: (str) => {
        const chars = str.split("");
        const result = [];
        const swap = (arr, i, j) => {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        };
        const permute = (arr, n) => {
            if (n === chars.length - 1) {
                const item = arr.join("");
                if(result.indexOf(item) == -1){
                    result.push(arr.join(""));
                }
            } else {
                for (let i = n; i < chars.length; i++) {
                    const copy = [...arr]
                    if (i > n) {
                        swap(copy, i, n);
                    }
                    permute(copy, n + 1);
                }
            }
        };
        permute(chars, 0);
        return result.join(" ");
    },
    tests: [
        {
            input: "ABA",
            expected: "ABA AAB BAA",
            description: ""
        },
        {
            input: "abc",
            expected: "abc acb bac bca cba cab",
            description: ""
        }
    ]
}