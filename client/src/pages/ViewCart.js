import React from "react";
import OrderField from "../components/OrderField/OrderField";
import Button, {
  PlaceOrderBtn,
  BackToMenuBtn
} from "../components/Buttons/Buttons";
import "../index.css";

function ViewCart() {
  return (
    <div>
      <OrderField />
      <PlaceOrderBtn />
      <BackToMenuBtn />
    </div>
  );
}

export default ViewCart;