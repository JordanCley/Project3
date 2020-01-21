import React from "react";
import { Link } from "react-router-dom";
import OrderField from "../components/OrderField/OrderField";
import Button, {
  GoToCardInfoBtn,
  GoToMyOrdersBtn
} from "../components/Buttons/Buttons";
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
