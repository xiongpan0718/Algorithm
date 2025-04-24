// seat_leave.js
// first number is seat number
// second list is seatOrLeave order, 1 means an employee sits down, -n means the one on index n leaves.
// should return the last sit down index, if no seat available, return -1
export default {
    run: (input) => {
        const [total, actions] = input;
        // create a new list of seats
        const seats = new Array(total).fill(0);
        let lastSitIndex = -1;
        for(let action of actions){
            if(action === 1){
                if(seats[0] === 0){
                    seats[0] = 1;
                    lastSitIndex = 0;
                }else{
                    let shouldSitIndex = -1;
                    let maxDistance = 0;
                    let gap = 0;
                    for(let i = 0; i < seats.length; i++){
                        if(i === seats.length-1 && seats[i] === 0){
                            shouldSitIndex = i;
                            break;
                        }
                        gap++;
                        if(seats[i] === 1){
                            if(gap > 1){
                                const distance = Math.floor(gap / 2);
                                if(distance > maxDistance){
                                    maxDistance = distance;
                                    shouldSitIndex = i - gap + distance;
                                }
                            }
                            gap = 0;
                        }
                    }
                    if(shouldSitIndex > 0){
                        seats[shouldSitIndex] = 1;
                    }
                    lastSitIndex = shouldSitIndex;
                }
            }else{
                if(action < 0){
                    const leaveIndex = Math.abs(action);
                    if(seats[leaveIndex] === 1){
                        seats[leaveIndex] = 0;
                    }
                }
            }
        }
        console.log(seats)
        return lastSitIndex;
    },
    tests: [
        {
            input: [10, [1,1,1,1,-4,1]],
            expected: 5,
            description: ""
        },
        {
            input: [10, [1]],
            expected: 0,
            description: ""
        },
        {
            input: [10, [1,1,1,1,1,1,1,1,1,1,1,1]],
            expected: -1,
            description: ""
        },
        {
            input: [10, [1,1,1,1,1,1,1,1,1,1]],
            expected: 8,
            description: ""
        },
    ]
}
