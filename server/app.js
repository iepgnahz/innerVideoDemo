const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('client/dist'));

app.use('/api', (req, res)=> {
  res.sendFile(path.resolve(__dirname,'./client/index.html'))
});

app.listen(3000, ()=> {
  console.log("Server started: http://localhost:3000")
});