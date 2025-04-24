// archaeologist.js
// find all possible combinations of the fragments
export default {
    run: (str) => {
        const list = str.split(' ');
        const result = [];
        const helper = (prefix, rest) => {
            if (rest.length === 0) {
                result.push(prefix);
            } else {
                for (let i = 0; i < rest.length; i++) {
                    helper(prefix + rest[i], rest.slice(0, i).concat(rest.slice(i + 1)));
                }
            }
        }
        helper('', list);
        //remove duplicates
        const unique = [...new Set(result)];
        return unique.sort();
    },
    tests: [
        {
            input: 'a b c',
            expected: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'],
        },
        {
            input: 'a b a',
            expected: ['aab', 'aba', 'baa'],
        },
        {
            input: 'a b ab',
            expected: ['aabb', 'abab', 'abba', 'baab', 'baba'],
        }
    ]
}