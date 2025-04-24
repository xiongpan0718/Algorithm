// step_game.js
// start at 0
// first number is lucky number, +1/-1 if encounter, 4 -> 5, -4 -> -5
// second array is the steps to go
// return the biggest coordinate.
export default {
    run: (input) => {
        const [luck, actions]=input;
        let coordinate = 0;
        let max = 0;
        for(let action of actions) {
            if(action === luck) {
                if(action >= 0){
                    coordinate += action + 1;
                }else{
                    coordinate += action - 1;
                }
            } else {
                coordinate += action;
            }
            if(coordinate > max) {
                max = coordinate;
            }
        }
        return max;
    },
    tests: [
        {
            input: [1, [-5, 1]],
            expected: 0,
            description: ""
        },
        {
            input: [-5, [-5, 1, 6, 0, -7]],
            expected: 1,
            description: ""
        }
    ]
}
