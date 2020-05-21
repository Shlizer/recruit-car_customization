var express = require('express')
var app = express()

const endpoints = ['car', 'color', 'engine', 'gearbox', 'layout', 'parts']

endpoints.forEach((endpoint) => {
  app.get(`/${endpoint}`, function (req, res) {
    delete require.cache[require.resolve(`./db/${endpoint}`)]
    res.json(require(`./db/${endpoint}`))
  })
})

app.listen(4000, function () {
  console.log('Car customization app listening on port 4000!')
})
