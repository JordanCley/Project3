const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema(
    {
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: "Product"
        }
      ],
    },
    { timestamps: true }
  );
  
  const Menu = mongoose.model("Menu", MenuSchema);
  module.exports = Menu;