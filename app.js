const express = require('express');
const { Worker } = require('worker_threads');

const app = express();

app.get('/', (req, res, next) => {
  const worker = new Worker('./worker.js');
  worker.on('message', data => {
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log('App up at: 3000');
});