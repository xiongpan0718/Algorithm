// template.js
// 
export default {
  run: (input) => {
    const [l1, l2] = input.map(list => list.split(' '));
    let n = 0, m = 0, res = [];
    while(n < l1.length || m < l2.length){
      if(m === l2.length || l1[n] < l2[m]){
        res.push(l1[n]);
        n++;
      }else{
        res.push(l2[m])
        m++;
      }
    }
    return res.join(' ')
  },
  tests: [
      {
          input: ["1 3 4 5", "2 3 6"],
          expected: "1 2 3 3 4 5 6",
          description: ""
      },
      {
        input: ["1", "2 3 6"],
        expected: "1 2 3 6",
          description: ""
      }
  ]
}