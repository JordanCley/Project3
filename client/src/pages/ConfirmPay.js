import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
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
    <div>
      {openCheckState.items.length ? (
        <div>
          {openCheckState.items.map(product => (
            <div key={product._id}>
              <p>{product.productName}</p>
              <p>{product.quantity}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in cart</p>
      )}

      <p>Tax: {openCheckState.tax}%</p>
      <p>Sub Total: ${openCheckState.total}</p>
      <p>Tip: {openCheckState.gratuity}%</p>
      <p>Grand Total: ${openCheckState.grandTotal.toFixed(2)}</p>
      {/*<ConfirmPaymentCard /> */}
      <Link to="/card-info">
        <Button>Cancel</Button>
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
