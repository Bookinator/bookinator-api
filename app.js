var express = require('express')
var mongoose = require('mongoose')
var config = require('./config')
var bodyParser = require('body-parser')
var expressJwt = require('express-jwt')

var app = express()

// Connection to mongoDB, this is not connection closing resistant!
var mongoUrl =  'mongodb://'+ process.env.mongoUser || config.mongoUser
mongoUrl += ':' + process.env.mongoPasswd || config.mongoPasswd
mongoUrl += '@' + process.env.mongoHost || config.mongoHost
mongoUrl += ':' + process.env.mongoPort || config.mongoPort
mongoUrl += '/' + process.env.mongoDb || config.mongoDb

mongoose.connect(mongoUrl, (err) => {
  if (err) { throw err }
})

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

// use expressJwt
app.use(expressJwt({ secret: config.jwtSecret }).unless({ path: [ '/login' ]}))

var login = require('./routes/login')
app.use("/login", login)

var user = require('./routes/user')
app.use("/user", user)

var book = require('./routes/book')
app.use("/book", book)

var type = require('./routes/type')
app.use("/type", type)

var serial = require('./routes/serial')
app.use("/serial", serial)

app.listen(process.env.PORT || 3300,  () => {
	console.log("Server Up")
})
