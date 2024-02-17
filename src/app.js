const express = require('express')
const morgan = require("morgan");

const app = express()

const first = (req, res, next) => {
  return next()
  res.send('First!')
}

const second = (req, res, next) => {
  res.send('Second!')
}

app.use(morgan("dev"));

app.use(first)
app.use(second)

module.exports = app