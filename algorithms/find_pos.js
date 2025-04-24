// find_postion.js
// find the right position in a sorted list for the target 
export default {
    run: (input) => {
        const [target, list] = input;
        const findPostion = (arr, startPos) => {
            if(arr.length === 0) return startPos;
            if(arr.length === 1) return target > arr[0] ? startPos + 1 : startPos;
            const mid = Math.floor(arr.length / 2);
            if(target > arr[mid]){
                return findPostion(arr.slice(mid + 1), startPos + mid + 1);
            } else {
                return findPostion(arr.slice(0, mid), startPos);
            }
        }
        return findPostion(list, 1);
    },
    tests: [
        {
            input: [110, [93, 95, 97, 100, 102, 123, 155]],
            expected: 6,
            description: ""
        },
        {
            input: [110, [1, 2, 4, 9, 11, 21, 155]],
            expected: 7,
            description: ""
        }
    ]
}
