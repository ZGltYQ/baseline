const { workerData, parentPort } = require('worker_threads')

setTimeout(()=>{
    parentPort.postMessage("sleeping ended")
}, workerData)