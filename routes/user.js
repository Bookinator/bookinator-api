var express = require('express')
var router = express.Router()

router.get("/", (req, res) => {
	// TODO GET USER
	// should return a json that contains the user
})

router.put("/:userId", (req, res) => {
	// TODO UDAPTE USER
	// should update the MongoDB base for USER
})

router.delete("/:userId", (req, res) => {
	// TODO DELETE USER
	// should return an empty json if delete is successfull,
	// a json that contains the user in other cases
})

module.exports = router
