import React, { createContext, useState } from "react";
import API from "../API";

export const OrderContext = createContext();

const OrderContextProvider = props => {
  const [openCheckState, setOpenCheckState] = useState({});

  const [orderState, setOrderState] = useState({
    items: [
      { quantity: 2, product: "5e22265f85c4b24aff235126" },
      { quantity: 1, product: "5e22265f85c4b24aff235127" }
    ],
    total: 0,
    tableNum: 0,
    gratuity: 0,
    tax: 0,
    grandTotal: 0
  });

  // viewing current check
  const viewOrderToPayClick = () => {
    console.log(openCheckState);
  };

  //  click event updating isPaid to true after payment
  const updateIsOrderPaidClick = () => {
    return API.updateIsOrderPaid(openCheckState._id)
      .then(res => console.log(res.data))
      .catch(err => alert(err));
  };

  // click event to create new order
  const createOrderClick = () => {
    return API.createOrder(
      orderState.items,
      orderState.tableNum,
      orderState.total,
      orderState.gratuity,
      orderState.tax,
      orderState.grandTotal
    )
      .then(res => {
        // setting openCheckState with newly created order
        setOpenCheckState(res.data);
      })
      .catch(err => alert(err));
  };

  // viewing all past orders for user
  const viewAllOrdersClick = () => {
    return API.viewAllOrders()
      .then(res => console.log(res.data))
      .catch(err => alert(err));
  };

  return (
    <OrderContext.Provider
      value={{
        orderState,
        createOrderClick,
        viewOrderToPayClick,
        viewAllOrdersClick,
        updateIsOrderPaidClick
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
