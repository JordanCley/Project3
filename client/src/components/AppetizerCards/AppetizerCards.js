import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { OrderContext } from "../../utils/context/OrderContext";
import { Link } from "react-router-dom";

function AppetizerCards(props) {
  const {
    products,
    addItemToCart,
    decrementQuantity,
    removeItemFromCart,
    viewOneAppetizer
  } = useContext(OrderContext);

  return (
    <div>
      {/* this is just a spinner for when the data is still loading */}
      {products.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        //mapping through the array of info I got from the API call
        products.map(appetizer => {
          return (
            
              // clicking on the card itself will make the page change to the
              // preview
              <Card
                style={{ width: "18rem" }}
                onClick={() => viewOneAppetizer(appetizer._id)}
                key={appetizer._id}
              >
                {/* just basic bootstrap card */}
                <Card.Img variant="top" src={appetizer.imageURL} />
                <Card.Body>
                  <Card.Title>{appetizer.productName}</Card.Title>
                  <Card.Text>{appetizer.description}</Card.Text>
                  <Card.Text>{appetizer.price}</Card.Text>
          <Link to="/app-preview"> View {appetizer.productName}</Link>
                
                <button onClick={() => addItemToCart(appetizer._id)}>
                  Add to item list
                </button>
                <button onClick={() => addItemToCart(appetizer._id)}>
                  {" "}
                  +{" "}
                </button>
                <button onClick={() => decrementQuantity(appetizer._id)}>
                  {" "}
                  -{" "}
                </button>
                <button onClick={() => removeItemFromCart(appetizer._id)}>
                  Remove item from list
                </button>
              </Card.Body>
            </Card>
          );
        })
      )}
    </div>
  );
}
export default AppetizerCards;
