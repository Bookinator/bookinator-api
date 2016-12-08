var express = require('express')
var router = express.Router()
var bookModel = require('../models/book')

router.get("/", (req, res) => {
	var query = bookModel.find(null)
  query.exec((err, books) => {
    if (err)
      console.log(err)
    else
      res.send(books)
  })
})

router.get("/:bookId", (req, res) => {
	// TODO GET Book
	// should return a json that contains the book
})

router.post("/", (req, res) => {
  var title = req.body.title
  var author = req.body.author
  var description = req.body.description
  var serial = req.body.serial
  var type = req.body.type
  var owner = req.body.owner
  var read = req.body.read

  var newBook = new bookModel({
    title: title,
    author: author,
    description: description,
    serial: serial,
    type: type,
    owner: owner,
    read: read
  })
  newBook.save((err) => {
    if (err)
      console.log(err)
    else
      res.send(newBook)
  })
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