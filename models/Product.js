const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    imageURL: String,
    productName: String,
    description: String,
    price: Number,
    menuID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu"
    }
    },
    { timestamps: true }
  );
  
  const Product = mongoose.model("Product", ProductSchema);
  module.exports = Product;