import React, { useContext, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import OrderField from "../components/OrderField/OrderField";
import "../index.css";
import ConfirmPaymentCard from "../components/ConfirmPaymentCard";
import { OrderContext } from "../utils/context/OrderContext";

function ConfirmPay() {
  const history = useHistory();
  const { openCheckState, updateIsOrderPaidClick } = useContext(OrderContext);
  const [isLoading, setIsLoading] = useState(false)
  
  const handlePayClick = () => {
    setIsLoading(true);
    updateIsOrderPaidClick()
      .then(() => history.push("/thank-you"))
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="confirm-pay-page bg-table-in-vintage-restaurant confirm-pay">
      {openCheckState.items.length ? (
        <div>
          {openCheckState.items.map(product => (
            <Row key={product._id} className="receipt-items">
              <p>{product.productName}</p>
              <p>{product.quantity}</p>
              <p>{product.price}</p>
            </Row>
          ))}
        </div>
      ) : (
        <p>No items in cart</p>
      )}
      <Col lg={4}>
        <span>Tax: {openCheckState.tax}%</span>
      </Col>
      <Col lg={4}>
        <span>Sub Total: ${openCheckState.total}</span>
      </Col>
      <Col lg={4}>
        <span>Tip: {openCheckState.gratuity}%</span>
      </Col>
      <Col lg={4}>
        <span>Grand Total: ${openCheckState.grandTotal.toFixed(2)}</span>
      </Col>
      {/*<ConfirmPaymentCard /> */}
      <div className="confirm-pay-buttons"></div>
      <Link to="/card-info">
        <Button className="left-button">Cancel</Button>
      </Link>
      <Link >
        <Button onClick={handlePayClick}>
          Pay
        </Button>
      </Link>
    </div>
  );
}

export default ConfirmPay;
