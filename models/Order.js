const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: "ListItems"
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
},
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;