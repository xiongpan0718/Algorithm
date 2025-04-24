// dop.js
// Degree of Polymerization, if we cut off all roads to one city, calculate the min dop
// total number of the cities is N, city name is 1 to N,
export default {
    run: (input) => {
        const n = input[0];
        const roads = input[1].map((road) => road.split(" ").map(Number));
        console.log(roads)
        //key: dop, value: [city_nme]
        const dopMap = new Map();
        const findTree = (rds, top) => {
            if(rds.length === 0){
                return 1;
            }
            let result = 1;
            for(let i = 0; i < rds.length; i++){
                const rd = rds[i];
                if(rd.indexOf(top) >= 0){
                    const newRds = rds.filter((_, k) => k !== i);
                    const newTop = rd.indexOf(top) === 0 ? rd[1] : rd[0];
                    result += findTree(newRds, newTop);
                }
            }
            return result;
        }
        for (let i = 1; i <= n; i++) {
            const newRoads = roads.filter(road => road.indexOf(i) === -1);
            console.log(newRoads)
            let maxDop = 1;
            for (let j = 1; j <= n; j++) {
                const dop = findTree(newRoads, j)
                if (dop > maxDop) {
                    maxDop = dop;
                }
            }
            if (dopMap.has(maxDop)) {
                dopMap.set(maxDop, dopMap.get(maxDop).concat(i));
            } else {
                dopMap.set(maxDop, [i]);
            }
        }
        //get the min dop city
       const minDop = Math.min(...dopMap.keys());
       return dopMap.get(minDop).sort((a,b)=>a-b).join(" ");
    },
    tests: [
        {
            input: [5, ["1 2", "2 3", "3 4", "4 5"]],
            expected: "3",
            description: ""
        },
        {
            input: [6, ["1 2", "2 3", "2 5", "3 4", "3 6"]],
            expected: "2 3",
            description: ""
        }
    ]
}
