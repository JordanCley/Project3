import React from "react";
import OrderField from "../components/OrderField/OrderField";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../index.css';

function ViewCart() {
  return (
    <div>
      <OrderField />
      <Link to="/view-check">
        <Button>Pay Now</Button>
      </Link>
      <Link to="/menu">
        <Button>Menu</Button>
      </Link>
    </div>
  );
}

export default ViewCart;
