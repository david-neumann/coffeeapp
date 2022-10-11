const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logEntrySchema = new Schema(
  {
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
    grinderName: {
      type: String,
    },
    grindSize: {
      type: String,
      enum: ['Fine', 'Medium-Fine', 'Medium', 'Medium-Coarse', 'Coarse'],
      required: true,
    },
    liked: {
      type: Boolean,
    },
    brewMethod: {
      type: Schema.Types.ObjectId,
      ref: 'BrewMethod',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('LogEntry', logEntrySchema);
