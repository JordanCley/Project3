import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./OrderField.css";

function OrderField() {
  const [orderState, setOrderState] = useState({
    items: [
      { _id: 32, quantity: 2, productName: "Bloomin Onion", price: 8.99 },
      { _id: 67, quantity: 1, productName: "Fat Steak", price: 9.99 }
    ],
    total: 0,
    tableNum: 0,
    gratuity: 0,
    tax: 0,
    grandTotal: 0
  });





  return (
    <Container fluid className="orderfield-container">
       {orderState.items.map(product => (
        <Row className="text-center mt-4 mb-4" key={product._id}>
          <Col lg={4}>
            <span>{product.productName}</span>
          </Col>
          <Col lg={4}>
              <span>{product.price * product.quantity}</span>
          </Col>
          <Col lg={4}>
              <span>{product.quantity}</span>
          </Col>
        </Row>
      ))}  
    </Container>
  );
}

export default OrderField;
