import React from "react";
import Button from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
import "../../index.css";
import { Link } from "react-router-dom";
export const GoToCardInfoBtn = () => {
  return (
    <Link to="/add-tip">
      <ReactBootStrap.Button
        className="go-forward-button"
        id="go-to-card-info-button"
        variant="outline-danger mr-2"
        size="lg"
        // href="/card-info"
      >
        Pay Now
      </ReactBootStrap.Button>
    </Link>
  );
};
export const GoToMyOrdersBtn = () => {
  return (
    <ReactBootStrap.Button
      className="go-back-button"
      id="go-to-my-orders-btn"
      variant="outline-danger mr-2"
      size="lg"
      href="/my-orders"
    >
      Cancel
    </ReactBootStrap.Button>
  );
};
export const BackToMenuBtn = () => {
  return (
    <ReactBootStrap.Button
      className="go-back-button"
      id="back-to-menu-button"
      variant="outline-danger mr-2"
      size="lg"
      href="/menu"
    >
      Back To Menu
    </ReactBootStrap.Button>
  );
};

export const PlaceOrderBtn = () => {
  return (
    <Link to="/view-check">
      <ReactBootStrap.Button
        className="go-forward-button"
        id="place-order-button"
        variant="outline-success ml-2"
        size="lg"
        // href="/view-check"
      >
        Place Order
      </ReactBootStrap.Button>
    </Link>
  );
};
