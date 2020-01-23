import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { OrderContext } from "../../utils/context/OrderContext";

function IndividualCardRender() {
  const { viewAppetizerState, addItemToCart } = useContext(OrderContext);
  console.log(viewAppetizerState)

  return (
    <div className="appetizer-preview-card">
      <h1>{viewAppetizerState.productName}</h1>
      <img src={viewAppetizerState.imageURL} alt="Appetizer" className="appetizer-preview-image"></img>
      <p>{viewAppetizerState.description}</p>
      <p>{viewAppetizerState.price}</p>
      {/* need to make this work */}
      <Link to="/My-Orders">
        <Button onClick={() => addItemToCart(viewAppetizerState._id)}>Add</Button>
      </Link>
      {/* makes the state back to false when pressing on the back button to redirect the page back to main menu */}
      <Link to="/menu">
        <Button>Back</Button>
      </Link>
    </div>
  );
}

export default IndividualCardRender;
