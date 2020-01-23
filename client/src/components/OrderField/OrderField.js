import React, { useContext } from "react";
import { OrderContext } from "../../utils/context/OrderContext.js"
import { Container, Row, Col } from "react-bootstrap";
import "./OrderField.css";

function OrderField() {
  const { orderState,
          addItemToCart,
          decrementQuantity,  
        } = useContext(OrderContext);


  return (
    <Container fluid className="orderfield-container">
       {orderState.items.map(product => (
        <Row className="text-center mt-4 mb-4" key={product._id}>
          <Col lg={4}>
            <span>{product.productName}</span>
          </Col>
          <Col lg={4}>
              <button onClick={() => addItemToCart(product._id)}>
                  {" "}
                  +{" "}
                </button>
              <span>{product.quantity}</span>
              <button onClick={() => decrementQuantity(product._id)}>
                  {" "}
                  -{" "}
                </button>
          </Col>
          <Col lg={4}>
              <span>{product.quantity * product.price}</span>
          </Col>
        </Row>
      ))}  

          <Col lg={4}>
              <span>Total: ${orderState.total}</span>
          </Col>
    </Container>
  );
}

export default OrderField;
