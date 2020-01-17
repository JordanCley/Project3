const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/serviceAppDB"
);

const orderSeed = [
  {
    total: 8.50,
    gratuity: 15,
    tax: 9.9,
    grandTotal: 10.61
  },
  {
    total: 10,
    gratuity: 15,
    tax: 9.9,
    grandTotal: 15.40
  },
  {
    total: 8.50,
    gratuity: 15,
    tax: 9.9,
    grandTotal: 15.40
  }
];

db.Order
  .remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
