import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ConfirmPay() {
  return (
    <div>
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
