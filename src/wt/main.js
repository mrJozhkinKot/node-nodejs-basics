import { Worker } from "worker_threads";
import os from "os";
import { resolve } from "path";

const performCalculations = async () => {
  const cpus = os.cpus();
  const arr = [];

for (let i = 0; i < cpus.length; i++) {
  arr.push (
    new Promise ((resolve, reject) => {
      const worker = new Worker("./worker.js", {
        workerData: 10 + i,
      });
      worker.on('message', resolve)
      worker.on('error', reject)
      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`))
        }
      })
    })
  )
}

 const result = await Promise.all(arr)
 console.log(result)
};

await performCalculations();
