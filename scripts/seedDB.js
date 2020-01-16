const mongoose = require("mongoose");
const db = require("../models");



mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/serviceAppDB', dbOptions)
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

const productSeed = [
  {
    imageURL: "",
    productName: "Bloomin' Onion",
    description: "An Outback original! Our special onion is hand-carved, cooked until golden and ready to dip into our spicy signature bloom sauce.",
    price: 8.99,
    menuId: null
  },
];

db.Post.remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
