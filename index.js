
import AlgorithmRunner from './runner.js';

// Self-executing main function
(async () => {
    const args = process.argv.slice(2);
    const isTest = args[0] === '--test';
    const algorithmName = args[1];
    //algorithm should be in the format of 'algorithms/<algorithmName>.js'
    //console.error(`Algorithm '${algorithmName}' not found`);
    const algorithms = await import(`./algorithms/${algorithmName}.js`).then((module) => {
        return module.default;
    }).catch((error) => {
        console.error(`Algorithm '${algorithmName}' not found`);
        process.exit(1);
    });

    const runner = new AlgorithmRunner(algorithms);
    
    // if (isTest) {
    //     if (algorithmName === 'all') {
    //         await runner.runAllTests();
    //     } else {
    //         await runner.runTest(algorithmName);
    //     }
    // }
    if (isTest) {
        await runner.runTest(algorithmName);
    }
})();
