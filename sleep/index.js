const { Worker } = require('worker_threads')

async function sleep(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./sleep.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}



console.log("test1")
sleep(2000).then(res=>{
    console.log(res)
}).catch(err => console.error(err))
console.log("test2")