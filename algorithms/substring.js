// substring.js
// find A from B, as a substring, A can be discontinuous in B, but each char inside has to be in order
// return last index
// may have more than one
export default {
    run: (input) => {
        const [target, string] = input.split(" ");
        //subTarget is rest of target we need to find out
        const findSub = (str, subTarget, prevIndex) => {
            if(subTarget === '' || str === '') return -1;
            //find out all same chars
            for(let i = 0; i < str.length; i++) {
                if(str[i] === subTarget[0]) {
                    //if found, check next char
                    if(subTarget.length === 1) {
                        return prevIndex + i + 1;
                    }
                    return findSub(str.slice(i + 1), subTarget.slice(1), prevIndex + i + 1);
                }
            }
            return -1;
        }
        return findSub(string, target, -1);
    },
    tests: [
        {
            input: "ace abcde",
            expected: 4,
            description: ""
        },
        {
            input: "fgh abcde",
            expected: -1,
            description: ""
        },
        {
            input: "acc cabcadcce",
            expected: 6,
            description: ""
        }
    ]
}
