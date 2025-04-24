// runner.js
class AlgorithmRunner {
    constructor(algorithms) {
        this.algorithms = algorithms;
    }

    async runTest(algorithmName) {
        const algorithm = this.algorithms;
        
        if (!algorithm) {
            console.error(`Algorithm '${algorithmName}' not found`);
            return;
        }

        console.log(`\n🧪 Testing ${algorithmName}...\n`);
        console.time('Total Test Time');
        
        let passedTests = 0;
        const totalTests = algorithm.tests.length;

        for (const [index, test] of algorithm.tests.entries()) {
            console.log(`Test ${index + 1}: ${test.description}`);
            console.time(`Test ${index + 1}`);
            
            try {
                const result = algorithm.run(test.input);
                const passed = JSON.stringify(result) === JSON.stringify(test.expected);
                
                if (passed) {
                    console.log('✅ Passed');
                    passedTests++;
                } else {
                    console.log('❌ Failed');
                    console.log('Expected:', test.expected);
                    console.log('Received:', result);
                }
                
                console.timeEnd(`Test ${index + 1}`);
                console.log(''); // Empty line for readability
            } catch (error) {
                console.log('❌ Failed - Error occurred');
                console.error(error);
                console.timeEnd(`Test ${index + 1}`);
                console.log(''); // Empty line for readability
            }
        }

        console.timeEnd('Total Test Time');
        console.log(`\nTest Summary: ${passedTests}/${totalTests} tests passed`);
    }

    // async runAllTests() {
    //     console.log('Running all tests...\n');
    //     console.time('Total Testing Time');
        
    //     for (const algorithmName of Object.keys(this.algorithms)) {
    //         await this.runTest(algorithmName);
    //     }
        
    //     console.timeEnd('Total Testing Time');
    // }
}

export default AlgorithmRunner;
