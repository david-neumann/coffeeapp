const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grinderSchema = new Schema({
  grinderName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Grinder', grinderSchema);
