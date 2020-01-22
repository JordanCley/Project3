const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        quantity: Number,
        imageURL: String,
        productName: String,
        description: String,
        price: Number,
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    }],
    total: {
        type: Number,
        required: true,
    },
    gratuity: {
        type: Number,
        required: true,
    },
    tax: {
        type: Number,
        required: true,
        default: 9.9
    },
    grandTotal: {
        type: Number,
        required: true
    },
    tableNum: {
        type: String,
        required: true
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    }
},
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;