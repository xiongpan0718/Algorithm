// simplify_coordinate.js
// simplify the given coordinate system of a route, route can only be horizontal, vertical or 45 degree oblique angle
export default {
    run: (input) => {
        const arr = input.split(" ").map(Number);
        const points = [];
        let midPoint = [];
        for (let i = 0; i < arr.length; i += 2) {
            if(points.length === 0){
                points.push(arr[i], arr[i+1]);
            }else{
                if(midPoint.length === 0){
                    midPoint = [arr[i], arr[i+1]];
                }else{
                    const prevPoint = points.slice(-2);
                    //check prevPoint, midPoint and (arr[i], arr[i+1]) are in the same line or not
                    const prevXChange = prevPoint[0] - midPoint[0];
                    const prevYChange = prevPoint[1] - midPoint[1];
                    const nextXChange = arr[i] - midPoint[0];
                    const nextYChange = arr[i+1] - midPoint[1];
                    if(prevXChange * nextYChange === prevYChange * nextXChange){
                        midPoint = [arr[i], arr[i+1]];
                    }else{
                        points.push(midPoint[0], midPoint[1]);
                        midPoint = [arr[i], arr[i+1]];
                    }
                }
            }
        }
        if(midPoint.length !== 0){
            points.push(midPoint[0], midPoint[1]);
        }
        return points.join(" ");
    },
    tests: [
        {
            input: "2 8 3 7 3 6 3 5 4 4 5 3 6 2 7 3 8 4 7 5",
            expected: "2 8 3 7 3 5 6 2 8 4 7 5",
            description: ""
        },
        {
            input: "2 2 3 3 4 4 4 8 8 0 9 1 14 6",
            expected: "2 2 4 4 4 8 8 0 14 6",
            description: ""
        }
    ]
}
