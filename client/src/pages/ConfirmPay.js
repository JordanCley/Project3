import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../index.css';
import ConfirmPaymentCard from "../components/ConfirmPaymentCard";

function ConfirmPay() {
  return (
    <div>
      This page is the confirm checkout page
      <ConfirmPaymentCard />
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
