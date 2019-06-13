var port = process.env.PORT || 3001
var express = require('express')
var morgan = require('morgan')
var path = require('path')

var compression = require('compression')

var app = express()

app.use(compression())

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname,'/build')))

app.get('*',function(req,res) {
    res.sendFile(path.join(__dirname,'/build','/index.html'))
})

app.listen(port,()=>{
    console.log(`Server running on PORT : ${port}.`)
})

