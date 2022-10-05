const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logEntrySchema = new Schema({
  waterAmount: {
    type: Number,
    required: true,
  },
  ratio: {
    type: Number,
    required: true,
  },
  coffeeDose: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('LogEntry', logEntrySchema);
