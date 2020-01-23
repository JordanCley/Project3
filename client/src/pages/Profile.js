import React, { useState, useEffect, useContext } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { OrderContext } from "../utils/context/OrderContext";
import '../index.css';

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();
  const {
    createOrderClick,
    viewOrderToPayClick,
    updateIsOrderPaidClick,
    viewAllOrdersClick,
    products,
    addItemToCart,
    removeItemFromCart,
    decrementQuantity,
    orderState,
    // handleInputChange
  } = useContext(OrderContext);

  useEffect(() => {
    API.getUser(user.id)
      .then(res => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
      })
      .catch(err => alert(err));
  }, [user]);

  return (
<div className="container Profile profile-page bg-table-in-vintage-restaurant">
      <h1>Welcome!</h1>
      <span></span>
      <h1>{firstName}</h1>
      {/* buttons to test api routes */}
      <p className="profile-page-button-margin">
        What would you like to do today?
      </p>
      <button
        className="profile-page-button-containers"
        onClick={createOrderClick}
      >
        Create Order
      </button>
      <button
        className="profile-page-button-containers"
        onClick={viewOrderToPayClick}
      >
        View Order to Pay
      </button>
      <button
        className="profile-page-button-containers"
        onClick={viewAllOrdersClick}
      >
        View All Past Orders
      </button>
      <button
        className="profile-page-button-containers"
        onClick={updateIsOrderPaidClick}
      >
        Pay
      </button>
      <Link to="/">
        <button className="profile-page-button-containers">Go home</button>
      </Link>
    </div>
  );
}

export default Profile;
