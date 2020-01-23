import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js"
import { Link } from "react-router-dom";
import OrderField from "../components/OrderField/OrderField";
import { GoToCardInfoBtn, GoToMyOrdersBtn } from "../components/Buttons/Buttons";
import { Col } from "react-bootstrap";
import '../index.css';

function ViewCheck() {
  const { orderState } = useContext(OrderContext);
  let tax = (orderState.total * (orderState.tax / 100)).toFixed(2);

  return (
    <div>
      <OrderField />
        <Col lg={4}>
            <span>Tax: ${tax}</span>
        </Col>
        <Col lg={4}>
            <span>Grand Total: ${orderState.grandTotal}</span>
        </Col>
      <GoToCardInfoBtn />
      <GoToMyOrdersBtn />
    </div>
  );
}

export default ViewCheck;
