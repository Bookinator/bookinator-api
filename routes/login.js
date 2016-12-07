var express = require('express')
var router = express.Router()
var userModel = require('../models/user')
var createHash = require('sha.js')
var jwt = require('jsonwebtoken')
var config = require('../config')

router.post("/", (req, res) => {
	var sha256 = createHash('sha256')
	var encryptedPasswd = sha256.update(req.body.password, 'utf8').digest('hex')
	
	query = userModel.find(null)
	query.where('mail', req.body.mail)
	query.where('password', encryptedPasswd)
	query.exec((err, users) => {
		if (err) {
			console.log(err)
		} else {
			token = jwt.sign({
				mail : users[0]
			}, config.jwtSecret)
			res.send({
				token: token
			})
		}
	})
})

module.exports = router
