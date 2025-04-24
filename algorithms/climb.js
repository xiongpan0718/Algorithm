// template.js
// [0,1,4,3,1,0,0,1,2,3,1,2,1,0] means mountain(s), calculate how many mountain tops we can reach
// Go up use 2X energy, go down use 1X energy
export default {
    run: (inputs) => {
        const [arr, energy] = inputs;
        //find mounts
        const mounts = [];
        let mount = [];
        let hasLeftEntry = false;
        for(let i in arr){
            if(arr[i] === 0){
                hasLeftEntry = true;
                if(mount.length > 0){
                    mount.push(0);
                    mounts.push(mount);
                    mount = [];
                }
            }else{
                if(hasLeftEntry){
                    mount.push(0);
                    hasLeftEntry = false;
                }
                mount.push(arr[i]);
                if(i == arr.length - 1){
                    mounts.push(mount);
                }
            }
        }
        console.log(mounts);
        let res = 0;
        for(let m of mounts){
            let spent = 0;
            let top_inds = [];
            // if left entry exists
            if(m[0] === 0){
                for(let i = 1; i < m.length; i++){
                    if(m[i] > m[i-1]){
                        spent += (m[i] - m[i-1]) * 2;
                    } else {
                        spent += (m[i-1] - m[i]);
                    }
                    // to make sure if we can go back
                    const estimatedGoBack = spent - m[i];
                    if(spent + estimatedGoBack > energy){
                        break;
                    }
                    // if the previous one is lower and
                    // it is the end or the next one is lower
                    // count it as a mountain top
                    if(
                        m[i] > m[i-1] &&
                        ((i === m.length - 1) ||
                        (m[i] > m[i+1]))
                    ){
                        top_inds.push(i);
                    }
                }
            }
            spent = 0;
            // if right entry exists
            if(m[m.length - 1] === 0){
                for(let i = m.length - 2; i >= 0; i--){
                    if(m[i] > m[i+1]){
                        spent += (m[i] - m[i+1]) * 2;
                    } else {
                        spent += (m[i+1] - m[i]);
                    }
                    // to make sure if we can go back
                    const estimatedGoBack = spent - m[i];
                    if(spent + estimatedGoBack > energy){
                        break;
                    }
                    // if the previous one is lower and
                    // it is the end or the next one is lower
                    // count it as a mountain top
                    if(
                        m[i] > m[i+1] &&
                        ((i === 0) ||
                        (m[i] > m[i-1]))
                    ){
                        top_inds.push(i);
                    }
                }
            }
            // remove duplicates
            top_inds = [...new Set(top_inds)];
            console.log(top_inds);
            res += top_inds.length;
        }
        return res;
    },
    tests: [
        {
            input: [[0,1,4,3,1,0,0,1,2,3,1,2,1,0], 13],
            expected: 3,
            description: "Should have 3 mountain top to reach"
        },
        {
            input: [[1,4,3], 999],
            expected: 0,
            description: "No start or end point"
        },
        {
            input: [[1,4,2,4,0,7,1,1,3,3,2], 21],
            expected: 2,
            description: "Should have 1 mountain top to reach"
        }
    ]
}
