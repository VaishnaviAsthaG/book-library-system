const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/issue', userController.issueBook);
router.post('/return', userController.returnBook);
router.get('/issued', userController.getIssuedBooks);

module.exports = router;
