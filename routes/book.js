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
	bookModel.findOne({_id:req.params.bookId}, (err, book) => {
    if (err)
      console.log(err)
    else
      res.send(book)
  })
})

router.post("/", (req, res) => {
  var book = {
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    serial: req.body.serial,
    type: req.body.type,
    owner: req.body.owner,
    read: req.body.read
  }

  var newBook = new bookModel(book)
  newBook.save((err) => {
    if (err)
      console.log(err)
    else
      res.send(newBook)
  })
})

router.delete("/:bookId", (req, res) => {
  bookModel.remove({_id:req.params.bookId})
  res.send({})
})

router.put("/:bookId", (req, res) => {
  var book = {
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    serial: req.body.serial,
    type: req.body.type,
    owner: req.body.owner,
    read: req.body.read
  }

  bookModel.update(
    {_id:req.params.bookId},
    book,
    (err) => {
      if (err)
        console.log(err)
      else
        res.send(book)
    })
})

module.exports = router