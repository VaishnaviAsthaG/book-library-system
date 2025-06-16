const express = require('express');
const app = express();
require('dotenv').config();

const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');
const db = require('./db/connection');

app.use(express.json());
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

app.get('/db-check', (req, res) => {
  db.query('SELECT DATABASE() AS db', (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ connectedTo: result[0].db });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
