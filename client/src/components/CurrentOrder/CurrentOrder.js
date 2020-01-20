import React, { useState, useEffect } from "react";

function currentOrder(props) {
  const currentOrderObj = {
    userId: "",
    items: [
      {
        productName: "",
        quantity: 0
      }
    ],
    subTotal: 0,
    gratuity: 0,
    tax: 0,
    grandTotal: 0,
    tableNum: "",
    isPaid: false
  };
  const [currentOrder, setCurrentOrder] = useState([currentOrderObj]);
  return <div>{currentOrderObj}</div>;
}

export default currentOrder;
