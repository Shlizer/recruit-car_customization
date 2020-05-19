var express = require('express')
var app = express()

app.get('/hello', function (req, res) {
  setTimeout(function () {
    res.json({
      message: 'Hello world!',
    })
  }, 3000)
})

app.listen(4000, function () {
  console.log('Car customization app listening on port 4000!')
})
