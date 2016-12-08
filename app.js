var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var config = require('./config')
var bodyParser = require('body-parser')
var expressJwt = require('express-jwt')

var app = express()

// Enable CORS
var corsOptions = {origin: 'http://localhost:8100'}
app.use(cors(corsOptions))

// Connection to mongoDB, this is not connection closing resistant!
var mongoUrl =  'mongodb://'+ config.mongoUser
mongoUrl += ':' + config.mongoPasswd
mongoUrl += '@' + config.mongoHost
mongoUrl += ':' + config.mongoPort
mongoUrl += '/' + config.mongoDb

mongoose.connect(mongoUrl, (err) => {
  if (err) { throw err }
})

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

// use expressJwt
// Comment the following line to disable JWT authentication
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

app.listen(config.port,  () => {
	console.log("Server Up")
})
