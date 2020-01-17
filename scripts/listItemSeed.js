const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

  

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/serviceAppDB",
);

const listItemSeed = [
  {
    quantity: 2
  },
  {
    quantity: 1
  },
  {
    quantity: 3
  }
];

db.ListItems
  .remove({})
  .then(() => db.ListItems.collection.insertMany(listItemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
