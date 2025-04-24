// nearest_time.js
// find nearest time, use the numbers from the given time
// e.g. 18:52 -> 18:55
export default {
    run: (input) => {
        const [hour, minite]= input.split(':');
        //get all used numbers
        const numbers = [];
        for(let i=0; i<5; i++) {
            if(i !== 2 && numbers.indexOf(input[i]) === -1) {
                numbers.push(input[i]);
            }
        }
        console.log(numbers);
        numbers.sort();
        //check if any legal minite num greater than current one
        //if yes, return [current hour] + minite num
        let singleInd = numbers.indexOf(minite[1]);
        let tenInd = numbers.indexOf(minite[0]);
        if(singleInd < numbers.length - 1){
            return hour + ':' + minite[0] + numbers[singleInd + 1];
        }else if(tenInd < numbers.length - 1 && numbers[tenInd + 1] < 6){
            return hour + ':' + numbers[tenInd + 1] + numbers[0];
        }else{
            //if no, get legal MIN minite num
            const minMinite = numbers[0] + numbers[0];
            //and check any legal hour num greater than current one
            //if yes, return hour num + [MIN minite num]
            //if no, return [MIN hour num] + [MIN minite num]
            tenInd = numbers.indexOf(hour[0]);
            singleInd = numbers.indexOf(hour[1]);
            if(hour[0] === '0' || hour[0] === '1'){
                if(singleInd < numbers.length - 1){
                    return hour[0] + numbers[singleInd + 1] + ':' + minMinite;
                }else if(tenInd < numbers.length - 1 && numbers[tenInd + 1] < 3){
                    return numbers[tenInd + 1] + numbers[0] + ':' + minMinite;
                }else{
                    return hour + ':' + minMinite;
                }
            }else if(hour[0] === '2'){
                if(singleInd < numbers.length - 1 && numbers[singleInd + 1] < 4){
                    return hour[0] + numbers[singleInd + 1] + ':' + minMinite;
                }else{
                    return numbers[0] + numbers[0] + ':' + minMinite;
                }
            }
        }
    },
    tests: [
        {
            input: "18:52",
            expected: "18:55",
            description: ""
        },
        {
            input: "00:33",
            expected: "03:00",
            description: ""
        },
        {
            input: "23:59",
            expected: "22:22",
            description: ""
        }
    ]
}
