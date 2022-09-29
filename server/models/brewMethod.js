const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brewMethodSchema = new Schema({
  methodName: {
    type: String,
    required: true,
  },
  iconUrlPath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('BrewMethod', brewMethodSchema);
