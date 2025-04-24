// huffman.js
// generate a huffman tree
export default {
    run: (input) => {
        const nodes = input.split(" ").map((n) => parseInt(n));
        //generate a huffman tree
        class Node {
            left = null;
            right = null;
            constructor(value) {
                this.value = value;
            }
        }
        const nodeArr = nodes.map(n => new Node(n));
        while (nodeArr.length > 1) {
            nodeArr.sort((a, b) => a.value - b.value);
            const left = nodeArr.shift();
            const right = nodeArr.shift();
            const node = new Node(left.value + right.value);
            node.left = left;
            node.right = right;
            nodeArr.push(node);
        }
        // generate the mid order list
        const midOrder = (node) => {
            console.log(node);
            if (node.left === null && node.right === null) {
                return node.value;
            }
            return `${midOrder(node.left)} ${node.value} ${midOrder(node.right)}`;
        };
        return midOrder(nodeArr[0]);
    },
    tests: [
        {
            input: "5 15 40 30 10",
            expected: "40 100 30 60 15 30 5 15 10",
            description: ""
        },
    ]
}
