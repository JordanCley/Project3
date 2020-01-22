import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardInfoForm from "../components/CardInfoForm";

function CardInfo() {
  return (
    <div>
      <CardInfoForm />
      <Link to="/add-tip">
        <Button>Continue</Button>
      </Link>
      <Link to="/view-check">
        <Button>Back</Button>
      </Link>
    </div>
  );
}

export default CardInfo;
