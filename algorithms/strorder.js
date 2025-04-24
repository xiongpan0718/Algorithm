// strorder.js
// Given a string, give all possible combination using all characters
export default {
    run: (str) => {
        let set = new Set();
        function helper(str, res){
            if(str.length === 0){
                set.add(res);
                return;
            }
            for(let i = 0; i<str.length; i++){
                let newStr = str.slice(0, i) + str.slice(i+1);
                helper(newStr, res+str[i]);
            }
        }
        helper(str, '')
        return Array.from(set).join(" ");

    },
    tests: [
        {
            input: "ABA",
            expected: "ABA AAB BAA",
            description: ""
        },
    ]
}