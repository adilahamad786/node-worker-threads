const {parentPort, workerData} = require('worker_threads');

// CPU intensive task
function computeFactorial(number) {
    if ((number === 0) || (number === 1)) return 1;
    return number * computeFactorial(number - 1);
}

// perform computations according to receive number
const result = computeFactorial(workerData.number);

// send the result to the main thread after compute
parentPort.postMessage(result);