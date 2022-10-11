const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = 9000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Connect to database
mongoose.connect('mongodb://localhost:27017/coffeedb', () =>
  console.log('Connected to the database.')
);

// Routes
app.use('/api/brewmethods', require('./routes/brewMethodRouter'));
app.use('/api/log', require('./routes/logRouter'));

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

// Server listen
app.listen(PORT, () => console.log(`The server is running on Port ${PORT}.`));
