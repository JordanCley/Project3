import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderField from "../components/OrderField/OrderField"
import '../index.css';
import ConfirmPaymentCard from "../components/ConfirmPaymentCard";
import { OrderContext } from "../utils/context/OrderContext"

function ConfirmPay() {
  const { openCheckState, } = useContext(OrderContext);

  return (
    <div>
          {openCheckState.items.map(product => (
            <div key={product._id}>
              <p>{product.productName}</p>
              <p>{product.quantity}</p>
              <p>{product.price}</p>
            </div>
          ))}

    <p>Tax: {openCheckState.tax}%</p> 
    <p>Sub Total: ${openCheckState.total}</p> 
    <p>Tip: {openCheckState.gratuity}%</p> 
    <p>Grand Total: ${openCheckState.grandTotal.toFixed(2)}</p> 
     {/*<ConfirmPaymentCard /> */}
      <Link to="/card-info">
        <Button>Cancel</Button>
      </Link>
      <button className="btn btn-primary" type="submit">
        Pay
      </button>
    </div>
  );
}

export default ConfirmPay;
