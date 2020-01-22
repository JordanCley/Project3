import React, { useContext } from "react";
import { OrderContext } from "../../utils/context/OrderContext.js"
import { Container, Row, Col } from "react-bootstrap";
import "./OrderField.css";

function OrderField() {
  const { orderState } = useContext(OrderContext);


  return (
    <Container fluid className="orderfield-container">
       {orderState.items.map(product => (
        <Row className="text-center mt-4 mb-4" key={product._id}>
          <Col lg={4}>
            <span>{product.productName}</span>
          </Col>
          <Col lg={4}>
              <span>{product.total}</span>
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
