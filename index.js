const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
})
var a =1;
var b =2;
var c = a+b;
//127.0.0.1-localhost 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})