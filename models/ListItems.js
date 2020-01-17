const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListItemsSchema = new Schema({
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true,
    // },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    },
    productId: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    quantity: {
        type: Number,
        required: true,
    }
},
    { timestamps: true }
);

const ListItems = mongoose.model("ListItems", ListItemsSchema);

module.exports = ListItems;