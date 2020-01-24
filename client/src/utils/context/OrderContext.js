import React, { createContext, useState, useEffect } from "react";
import API from "../API";

export const OrderContext = createContext();

const OrderContextProvider = props => {
  const initialState = {
    items: [],
    total: 0,
    tableNum: 0,
    gratuity: 0,
    tax: 9.9,
    grandTotal: 0
  };

  const [openCheckState, setOpenCheckState] = useState({});
  const [tipMethodState, setTipMethodState] = useState({
    tipMethod: "radioTip"
  });

  const [products, setProducts] = useState([]);
  const [viewAppetizerState, setViewAppetizerState] = useState({});
  const [orderState, setOrderState] = useState(initialState);

  

  // added another useEffect hook to grab appetizers from db
  useEffect(() => {
    API.getProducts()
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => alert(err));
  }, []);

  useEffect(() => {}, []);

  const viewOneAppetizer = id => {
    let item = products.filter(product => {
      return product._id === id;
    });
    item = item[0];
    setViewAppetizerState(item);
  };

  const resetTipMethod = () => {
    setTipMethodState({ tipMethod: "radioTip" });
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
    return API.updateIsOrderPaid(
      openCheckState._id,
      openCheckState.items,
      openCheckState.tableNum,
      openCheckState.total,
      openCheckState.gratuity,
      openCheckState.tax,
      openCheckState.grandTotal
    )
      .then(res => setOpenCheckState({}))
      .then(res => setOrderState(initialState))
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
      // .then(() => setOrderState(initialState))
      .catch(err => alert(err));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setOrderState({ ...orderState, [name]: value });
    console.log(orderState.gratutity);
  };

  const handleTipChange = event => {
    const { name, value } = event.target;
    setOpenCheckState({ ...openCheckState, [name]: value });
    console.log(openCheckState.gratutity);
  };

  const handleTipMethodChange = event => {
    const { name, value } = event.target;
    setTipMethodState({ [name]: value });
  };

  // viewing all past orders for user
  const viewAllOrdersClick = () => {
    return API.viewAllOrders()
      .then(res => console.log(res.data))
      .catch(err => alert(err));
  };

  // ANTHONY - added functions to calculate subTotal. These are to render state
  useEffect(() => {
    const subTotal = array => {
      let itemTotal = 0;
      for (let i = 0; i < array.length; i++) {
        itemTotal = itemTotal + array[i].price * array[i].quantity;
      }
      console.log(itemTotal);
      setOrderState({ ...orderState, total: itemTotal });
    };
    subTotal(orderState.items);
    console.log(orderState.items);
  }, [orderState.items]);

  // ANTHONY - added functions to calculate grandTotal. These are to render state
  useEffect(() => {
    calculateGrandTotal(openCheckState);
    console.log(openCheckState.grandTotal);
  }, [openCheckState.gratuity]);

  const calculateGrandTotal = state => {
    let tipTotal = state.total * (state.gratuity / 100);
    let taxTotal = state.total * (state.tax / 100);
    let totalSum = state.total + (tipTotal + taxTotal);
    setOpenCheckState({ ...openCheckState, grandTotal: totalSum });
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
        handleInputChange,
        viewOneAppetizer,
        viewAppetizerState,
        // subTotal,
        calculateGrandTotal,
        resetTipMethod,
        openCheckState,
        handleTipChange,
        setOpenCheckState,
        tipMethodState,
        handleTipMethodChange
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
