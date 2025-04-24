// wonderland.js
// 1st list represents the price of 1, 3, 7, 30 days tickets
// 2nd list is an travel plan from 1 to 365, order by ascend
// give min cost
export default {
    run: (input) => {
        const [prices, plan] = input;
        
        const getRestPlan = (p, day) => {
            const restPlan = [];
            for (let i = 0; i < p.length; i++) {
                if (p[i] - p[0] > day - 1) {
                    restPlan.push(p[i]);
                }
            }
            return restPlan;
        }
        const caculate = (restPlan) => {
            if (restPlan.length === 0) {
                return 0;
            }
            //1 day ticket
            const cost1 = prices[0] + caculate(getRestPlan(restPlan, 1));
            //3 days ticket
            const cost2 = prices[1] + caculate(getRestPlan(restPlan, 3));
            //7 days ticket
            const cost3 = prices[2] + caculate(getRestPlan(restPlan, 7));
            //30 days ticket
            const cost4 = prices[3] + caculate(getRestPlan(restPlan, 30));
            return Math.min(cost1, cost2, cost3, cost4);
        }
        return caculate(plan);
    },
    tests: [
        {
            input: [[5, 14, 30, 100], [1, 3, 15, 20, 21, 200, 202, 230]],
            expected: 40,
            description: ""
        },
        {
            input: [[2, 10, 5, 20], [1, 2, 3, 4, 100, 200]],
            expected: 9,
            description: ""
        }
    ]
}
