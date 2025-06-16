const userModel = require('../models/userModel');
const bookModel = require('../models/bookModel');

// POST issue a book
exports.issueBook = (req, res) => {
  const { book_id, user_id, return_date } = req.body;

  userModel.checkDuplicateIssue(book_id, user_id, (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.length > 0) {
      return res.status(400).json({ message: 'This book is already issued to this user.' });
    }

    // 1. Update book status
    bookModel.updateBookStatus(book_id, 'issued', (err1) => {
      if (err1) return res.status(500).json({ error: err1 });

      // 2. Insert into issued_books
      userModel.issueBook(book_id, user_id, return_date, (err2) => {
        if (err2) return res.status(500).json({ error: err2 });
        res.json({ message: 'Book issued successfully' });
      });
    });
  });
};

// POST return a book
exports.returnBook = (req, res) => {
  const { book_id, user_id } = req.body;

  userModel.returnBook(book_id, user_id, (err1) => {
    if (err1) return res.status(500).json({ error: err1 });

    bookModel.updateBookStatus(book_id, 'available', (err2) => {
      if (err2) return res.status(500).json({ error: err2 });
      res.json({ message: 'Book returned successfully' });
    });
  });
};

// GET issued books
exports.getIssuedBooks = (req, res) => {
  userModel.getIssuedBooks((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
