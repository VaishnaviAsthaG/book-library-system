const bookModel = require('../models/bookModel');

// GET all books
exports.getAllBooks = (req, res) => {
  bookModel.getAllBooks((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// POST add a book
exports.addBook = (req, res) => {
  const { title, author } = req.body;
  bookModel.addBook(title, author, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Book added successfully' });
  });
};

// DELETE a book
exports.deleteBook = (req, res) => {
  const bookID = req.params.id;
  bookModel.deleteBook(bookID, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Book deleted successfully' });
  });
};
