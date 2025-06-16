const db = require('../db/connection');

const bookModel = {
  getAllBooks: (callback) => {
    db.query('SELECT * FROM books', callback);
  },

  addBook: (title, author, callback) => {
    db.query('INSERT INTO books (title, author) VALUES (?, ?)', [title, author], callback);
  },

  deleteBook: (id, callback) => {
    db.query('DELETE FROM books WHERE id = ?', [id], callback);
  },

  updateBookStatus: (bookId, status, callback) => {
    db.query('UPDATE books SET status = ? WHERE id = ?', [status, bookId], callback);
  }
};

module.exports = bookModel;
