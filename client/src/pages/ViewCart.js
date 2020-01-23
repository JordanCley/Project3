import React, {useContext} from "react";
import OrderField from "../components/OrderField/OrderField";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../index.css';
import { OrderContext } from "../utils/context/OrderContext"

function ViewCart() {
 const { createOrderClick } = useContext(OrderContext);

  return (
    <div className="view-cart-page">
      <OrderField />
      <Link to="/view-check">
        <Button onClick={createOrderClick}>Place Order</Button>
      </Link>
      <Link to="/menu">
        <Button>Menu</Button>
      </Link>
    </div>
  );
}

export default ViewCart;
