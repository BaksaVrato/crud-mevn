const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  }
});

module.exports = model('Item', itemSchema);