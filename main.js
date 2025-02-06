const { Worker } = require('worker_threads');

function runWorker(number) {
    return new Promise((resolve, reject) => {
        const worker = new Worker("./worker-thread-1.js", { 
            workerData : {number}  // Pass data to worker
        });

        worker.on('message', resolve) // Receive result
        worker.on('error', reject) // Handle error
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stop with exit code ${code}.`));
            }
        })
    })
}

// Execute worker thread
runWorker(1000)
    .then(result => console.log(`Factorial : ${result}`))
    .catch(error => console.error(error));