const express = require('express');
const crypto = require('crypto');
const app = express();
const { Worker } = require('worker_threads');

app.get('/', (req, res) => {

  const worker = new Worker(function () {
    this.on('message') = function () {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }

      postMessage(counter);  // Send back to app the result from worker thread //
    }
  });

  worker.on('message') = function (myCounter) {
    console.log(myCounter);
  }

  worker.postMessage();

});

app.get('/fast', (req, res) => {
  res.send('This was fast!')
});

app.listen(3000);
