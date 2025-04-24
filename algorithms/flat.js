// flat.js
//
export default {
  run: (list) => {
    const flatten = (arr) => {
      const index = arr.findIndex((item) => Array.isArray(item));
      if (index === -1) {
        return arr;
      } else {
        const newArr = [
          ...arr.slice(0, index),
          ...arr[index],
          ...arr.slice(index + 1),
        ];
        return flatten(newArr);
      }
    }
    return flatten(list);
  },
  tests: [
    {
      input: [1, [[1, 2, [3]]], [4], 2, 3],
      expected: [1, 1, 2, 3, 4, 2, 3],
      description: "",
    },
    {
      input: [1, [[1, 2, [[3, 3]]]], 2, [4, 5, 4], 2],
      expected: [1, 1, 2, 3, 3, 2, 4, 5, 4, 2],
      description: "",
    },
  ],
};
