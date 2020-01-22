import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderField from "../components/OrderField/OrderField";
import TipField from "../components/AddTipInput";
import TaxField from "../components/AddTaxInput";
import ThankYouAlert from "../components/ThankYouAlert";

function ConfirmPay() {

  //import the TipAmount from AddTip.js and set that value to TaxField
  //make a button that, when clicked, calls a function that renders the ThankYouAlert
  //make another button to render the CancelAlert

  return (
    <div>
      <OrderField />
      <TaxField />
      <TipField />
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
