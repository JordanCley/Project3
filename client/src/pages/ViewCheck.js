import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ViewCheck() {
  return (
    <div>
      This is the View My Check Page.
      <Link to="/card-info">
        <Button>Pay</Button>
      </Link>
      <Link to="/my-orders">
        <Button>Back</Button>
      </Link>
    </div>
  );
}

export default ViewCheck;
