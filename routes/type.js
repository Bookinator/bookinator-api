var express = require('express')
var router = express.Router()

router.get("/", (req, res) => {
	// TODO GET Type
	// should return a json that contains the list of all type of book
})

router.get("/:typeId", (req, res) => {
	// TODO GET Type
	// should return a json that contains a type of book
})

router.put("/:typeId", (req, res) => {
	// TODO PUT Type
	// should update a type of book in mongoDb
})

router.delete("/:typeId", (req, res) => {
	// TODO DELETE Type
	// should delete a type of book in mongoDb
})

module.exports = router