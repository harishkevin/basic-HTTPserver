const express = require('express')
let bodyParser = require('body-parser')
const app = express()
const port = 3000
let numberOfRequest = 0


// app.use(middleware)

// function middleware(req, res, next) {
//   numberOfRequest+=1
//   console.log(numberOfRequest)
//   next()
// }

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <p>html page rendered</p>
  </body>
  </html> `)
})

app.get('/calculate', (req, res) => {
    let value = req.query.count
    let number = calculateSum(value);
    res.send({'The sum is ' :  number})
})

// app.get('/number', (req, res) => {       thinks you are sending status code
//     res.send(900)
// })

app.post('/post', (req, res) => {
    console.log(req.body)
    const postData = req.body.counter
    res.status(200).send({
      sum : calculateSum(postData),
      mul : calculateMul(postData)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function calculateSum(value) {
    let sum = 0;
    for (let i=0; i<=value; i++) {
        sum+=i;
    }
    return sum
}

function calculateMul(value) {
  let mul = 1;
  for (let i=1; i<=value; i++) {
    mul*=i;
  }
  return mul
}