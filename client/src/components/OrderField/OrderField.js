import React, { useContext } from "react";
import { OrderContext } from "../../utils/context/OrderContext.js"
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./OrderField.css";

function OrderField() {
  const { orderState,
          addItemToCart,
          decrementQuantity,  
        } = useContext(OrderContext);


  return (
    <Container fluid className="orderfield-container">
       {orderState.items.map(product => (
        <Row className="text-center mt-4 mb-4 list-orders" key={product._id}>
          <div className="order-item">
            <span>{product.productName}</span>
          </div>
          <div className="order-item">
              <button onClick={() => addItemToCart(product._id)} className="left-button">
                  <FontAwesomeIcon icon={faAngleUp} />
                </button>
              <span>{product.quantity}</span>
              <button onClick={() => decrementQuantity(product._id)}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
          </div>
          <div className="order-item">
              <span>${product.quantity * product.price}</span>
          </div>
        </Row>
      ))}  

          <Col lg={4}>
              <span>Total: ${orderState.total}</span>
          </Col>
    </Container>
  );
}

export default OrderField;
