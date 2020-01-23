import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Row } from "react-bootstrap";
import { OrderContext } from "../../utils/context/OrderContext";

function IndividualCardRender() {
  const { viewAppetizerState, addItemToCart } = useContext(OrderContext);
  console.log(viewAppetizerState);

  return (
    <div className="appetizer-preview-card">
      <h1 className="appetizer-preview-h1">{viewAppetizerState.productName}</h1>
      <img
        src={viewAppetizerState.imageURL}
        alt="Appetizer"
        className="appetizer-preview-image"
      ></img>
      <p className="appetizer-preview-description">
        {viewAppetizerState.description}
      </p>
      <p className="appetizer-preview-price">${viewAppetizerState.price}</p>
      <Row className="appetizer-preview-buttons-row">
        <Link to="/menu">
          <Button className="appetizer-preview-back-to-menu-button go-back-button">
            Back
          </Button>
        </Link>
        <Link to="/My-Orders">
          <Button
            className="appetizer-preview-add-to-cart-button go-forward-button"
            onClick={() => addItemToCart(viewAppetizerState._id)}
          >
            Add
          </Button>
        </Link>
        {/* makes the state back to false when pressing on the back button to redirect the page back to main menu */}
      </Row>
    </div>
  );
}

export default IndividualCardRender;
