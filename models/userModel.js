const db = require('../db/connection');

const userModel = {
  issueBook: (bookId, userId, returnDate, callback) => {
    const insertIssued = `
      INSERT INTO issued_books (book_id, user_id, issue_date, return_date)
      VALUES (?, ?, CURDATE(), ?)
    `;
    db.query(insertIssued, [bookId, userId, returnDate], callback);
  },

  checkDuplicateIssue: (bookId, userId, callback) => {
    const checkQuery = `
      SELECT * FROM issued_books
      WHERE book_id = ? AND user_id = ?
    `;
    db.query(checkQuery, [bookId, userId], callback);
  },

  returnBook: (bookId, userId, callback) => {
    db.query('DELETE FROM issued_books WHERE book_id = ? AND user_id = ?', [bookId, userId], callback);
  },

  getIssuedBooks: (callback) => {
    const query = `
      SELECT 
        b.title, 
        u.name AS user_name, 
        i.issue_date, 
        i.return_date 
      FROM issued_books i
      JOIN books b ON i.book_id = b.id
      JOIN users u ON i.user_id = u.id
    `;
    db.query(query, callback);
  }
};

module.exports = userModel;
