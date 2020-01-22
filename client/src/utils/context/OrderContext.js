import React, { createContext, useState, useEffect } from "react";
import API from "../API";

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

  // Add item to cart or increment quantity of product
  const addItemToCart = id => {
    let item = products.filter(product => {
      return product._id === id;
    });
    item = item[0];
    if (!item.quantity) {
      item.quantity = 1;
    } else {
      item.quantity++;
    }
    let arr = orderState.items.filter(listItem => {
      return listItem._id !== id;
    });
    setOrderState({ ...orderState, items: [...arr, item] });
    console.log(orderState.items[0]);
  };

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
        products,
        addItemToCart
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
