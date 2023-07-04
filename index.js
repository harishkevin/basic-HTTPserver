const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/calculate', (req, res) => {
    let value = req.query.count
    let number = calculateSum(value);
    res.send('The sum is ' + number)
})

// app.get('/number', (req, res) => {       thinks you are sending status code
//     res.send(900)
// })

app.post('/post', (req, res) => {
    const postData = req.body
    res.send('post created successfully')
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