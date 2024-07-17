const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: true
  },
  itemNumber: {
    type: Number,
    required: true
  },
  timeArray: {
    type: Array
  }
});

module.exports = model('Item', itemSchema);