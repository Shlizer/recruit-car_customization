var express = require('express')
var app = express()

app.get(`/layout`, function (req, res) {
  delete require.cache[require.resolve(`./db/layout`)]
  res.json(require(`./db/layout`))
})

app.get(`/parts`, function (req, res) {
  delete require.cache[require.resolve(`./db/parts`)]
  res.json(require(`./db/parts`))
})

app.get(`/part/:partName`, function (req, res) {
  delete require.cache[require.resolve(`./db/parts/${req.params.partName}`)]
  res.json(require(`./db/parts/${req.params.partName}`))
})

app.listen(4000, function () {
  console.log('Car customization app listening on port 4000!')
})
