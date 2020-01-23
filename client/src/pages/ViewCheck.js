import React from "react";
import { Link } from "react-router-dom";
import OrderField from "../components/ViewCart/ViewCart";
import Button, {
  GoToCardInfoBtn,
  GoToMyOrdersBtn
} from "../components/Buttons/Buttons";
import '../index.css';

function ViewCheck() {
  return (
    <div>
      <OrderField />
      <GoToCardInfoBtn />
      <GoToMyOrdersBtn />
    </div>
  );
}

export default ViewCheck;
