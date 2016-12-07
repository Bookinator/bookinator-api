var express = require('express')
var router = express.Router()

router.get("/:serialId", (req, res) => {
	// TODO GET SERIAL
	// should return a json that contains the serial
})

router.post("/:serialId", (req, res) => {
	// TODO POST SERIAL
	// should return the new serial in MongoDB
})

router.put("/:serialId", (req, res) => {
	// TODO UPDATE SERIAL
	// should update serial in MongoDB
})

router.delete("/:serialId", (req, res) => {
	// TODO DELETE SERIAL in MongoDB
	// should return an empty json if delete is successfull,
	// a json that contains the serial in other cases
})

module.exports = router