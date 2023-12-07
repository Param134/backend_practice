require('dotenv').config()
const express = require('express')
const app = express()


//request to server - server take it from 'get'
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Twitter page')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login page</h1>')
})

app.get('/param', (req, res) => {
    res.send('at /param')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})