import React, { createContext, useState, useEffect } from "react";
import API from "../API";
import { STATES } from "mongoose";

export const OrderContext = createContext();

const OrderContextProvider = props => {
  const [openCheckState, setOpenCheckState] = useState({});
  const [products, setProducts] = useState([]);

  const [orderState, setOrderState] = useState({
    items: [],
    total: 0,
    tableNum: 0,
    gratuity: 0,
    tax: 0,
    grandTotal: 0
  });

   // added another useEffect hook to grab appetizers from db
   useEffect(() => {
    API.getProducts()
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => alert(err));
  }, []);

  // WIP 
  // const addItemToCart = (event) => {
  //   return orderState.items.map(product => {
  //     if(product.id === event.tagert.id){
  //       const listItem = {id: product.id, quantity: 1};
  //       orderState.items.push(listItem);
  //     }
  //   });
  // }

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
        updateIsOrderPaidClick, 
        products
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
