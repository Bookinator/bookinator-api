var express = require('express')
var router = express.Router()

router.get("/", (req, res) => {
	// TODO GET Library
	// should return a json that contains the list of all books
})

router.get("/:bookId", (req, res) => {
	// TODO GET Book
	// should return a json that contains the book
})

router.post("/:bookId", (req, res) => {
  // TODO POST book
  // should create the book in mongoDb
})

router.delete("/:bookId", (req, res) => {
  // TODO DELETE book
  // should delete the book in mongoDb
})

router.put("/:bookId", (req, res) => {
  // TODO PUT book
  // should update the book in mongoDb
})

module.exports = router