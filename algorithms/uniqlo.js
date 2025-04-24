// uniqlo.js
// 
export default {
    run: (names) => {
        switch(names.length){
            case 0: return "no one likes them";
            case 1: return `${names[0]} likes them`;
            case 2: return `${names[0]} and ${names[1]} like them`;
            case 3: return `${names[0]}, ${names[1]} and 1 other like them`;
            default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like them`;
        }
    },
    tests: [
        {
            input: [],
            expected: "no one likes them",
            description: ""
        },
        {
            input: ["Tom", "Jack", "Sam"],
            expected: "Tom, Jack and 1 other like them",
            description: ""
        },
        {
            input: ["Tom", "Jack", "Sam", "Jill"],
            expected: "Tom, Jack and 2 others like them",
            description: ""
        },
        {
            input: ["Tom", "Jack", "Sam", "Jill", "Bob"],
            expected: "Tom, Jack and 3 others like them",
            description: ""
        }
    ]
}
