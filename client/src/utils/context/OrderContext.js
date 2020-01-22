import React, { createContext, useState, useEffect } from "react";
import API from "../API";

export const OrderContext = createContext();

const OrderContextProvider = props => {
  const [openCheckState, setOpenCheckState] = useState({});
  const [products, setProducts] = useState([]);
  const [viewAppetizerState, setViewAppetizerState] = useState({});
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

  const viewOneAppetizer = id => {
    let item = products.filter(product => {
      return product._id === id;
    });
    item = item[0];
    setViewAppetizerState(item);
  };

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
  };

  // Remove item from cart
  const removeItemFromCart = id => {
    if (!orderState.items.length) {
      alert("There are no items in cart");
    } else {
      let item = products.filter(product => {
        return product._id === id;
      });
      item = item[0];

      item.quantity = 0;

      let arr = orderState.items.filter(listItem => {
        return listItem._id !== id;
      });
      setOrderState({ ...orderState, items: [...arr] });
    }
  };

  // decrement item quantity
  const decrementQuantity = id => {
    let item = products.filter(product => {
      return product._id === id;
    });
    item = item[0];
    if (item.quantity === 1) {
      alert("If you would lke to remove item, please use delete button");
    } else {
      item.quantity--;
    }

    let arr = orderState.items.filter(listItem => {
      return listItem._id !== id;
    });
    setOrderState({ ...orderState, items: [...arr, item] });
  };

  // viewing current check
  const viewOrderToPayClick = () => {
    console.log(openCheckState);
  };

  //  click event updating isPaid to true after payment
  const updateIsOrderPaidClick = () => {
    return API.updateIsOrderPaid(openCheckState._id)
      .then(res => setOpenCheckState({}))
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

  const handleInputChange = event => {
    const { name, value } = event.target;
    setOrderState({ ...orderState, [name]: value });
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
        addItemToCart,
        removeItemFromCart,
        decrementQuantity,
        orderState,
        orderState,
        handleInputChange,
        viewOneAppetizer,
        viewAppetizerState
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
