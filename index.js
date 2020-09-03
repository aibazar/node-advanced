const express = require('express');
const app = express();

function doWork() {

}

app.get('/', (req, res) => {
  res.send('Hi there')
});

app.listen(3000);