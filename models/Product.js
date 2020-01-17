const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    imageURL: String,
    productName: String,
    description: String,
    price: Number,
    },
    { timestamps: true }
  );
  
  const Product = mongoose.model("Product", ProductSchema);
  module.exports = Product;