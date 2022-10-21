import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send({ msg: 'Hello there! My name is Alonso Hernandez.' })
})

app.listen(port)
