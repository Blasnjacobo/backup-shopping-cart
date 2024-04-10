const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  items: [{
    perfume: {
      type: String,
      required: false
    },
    quantity: {
      type: Number,
      required: false
    }
  }]
});

const Cart = mongoose.model('Cart', cartSchema, 'cart');

module.exports = Cart;