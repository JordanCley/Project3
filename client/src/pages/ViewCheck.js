import React, { useContext } from "react";
import { OrderContext } from "../utils/context/OrderContext.js"
import { Link } from "react-router-dom";
import OrderField from "../components/OrderField/OrderField";
import { GoToCardInfoBtn, GoToMyOrdersBtn } from "../components/Buttons/Buttons";
import { Container, Row, Col } from "react-bootstrap";
import '../index.css';

function ViewCheck() {
  const { orderState } = useContext(OrderContext);


  return (
    <div>
      <OrderField />
        <Col lg={4}>
            <span>Tax: ${orderState.total * (orderState.tax / 100)}</span>
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
