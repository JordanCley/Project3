import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import CardInfoForm from "../components/CardInfoForm";
=======
import '../index.css';
>>>>>>> master

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
