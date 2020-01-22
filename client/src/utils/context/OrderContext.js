<<<<<<< HEAD
import React, { createContext, useState } from "react";
import API from "../API";
=======
import React, { createContext, useState, useEffect } from "react";
import API from "../API";
import { STATES } from "mongoose";
>>>>>>> 5edda4173fafb8f873b7c9010e28eea01e172e12

export const OrderContext = createContext();

const OrderContextProvider = props => {
  const [openCheckState, setOpenCheckState] = useState({});
<<<<<<< HEAD

  const [orderState, setOrderState] = useState({
    items: [
      { quantity: 2, product: "5e22265f85c4b24aff235126" },
      { quantity: 1, product: "5e22265f85c4b24aff235127" }
    ],
=======
  const [products, setProducts] = useState([]);

  const [orderState, setOrderState] = useState({
    items: [],
>>>>>>> 5edda4173fafb8f873b7c9010e28eea01e172e12
    total: 0,
    tableNum: 0,
    gratuity: 0,
    tax: 0,
    grandTotal: 0
  });

<<<<<<< HEAD
=======
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

>>>>>>> 5edda4173fafb8f873b7c9010e28eea01e172e12
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
<<<<<<< HEAD
        updateIsOrderPaidClick
=======
        updateIsOrderPaidClick, 
        products
>>>>>>> 5edda4173fafb8f873b7c9010e28eea01e172e12
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
