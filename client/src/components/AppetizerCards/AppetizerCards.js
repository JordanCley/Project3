import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import API from "../../utils/API";
import "./AppetizerCards.css"

function AppetizerCards(props) {
  //loading the app(appetizer) with the api.getproducts
  const [app, setApp] = useState([]);
  useEffect(() => {
    loadApps();
  }, []);

  function loadApps() {
    API.getProducts()
      .then(res => {
        setApp(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      {/* this is just a spinner for when the data is still loading */}
      {app.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        //mapping through the array of info I got from the API call
        app.map(appetizer => {
          return (
            // clicking on the card itself will make the page change to the preview
            <Card
              className="appetizer-card"
              style={{ width: "18rem" }}
              onClick={() => props.itemPreview(appetizer)}
              key={appetizer._id}
            >
              {/* just basic bootstrap card */}
              <Card.Img variant="top" src={appetizer.imageURL} />
              <Card.Body>
                <Card.Title>{appetizer.productName}</Card.Title>
                <Card.Text>{appetizer.description}</Card.Text>
                <Card.Text>{appetizer.price}</Card.Text>
              </Card.Body>
            </Card>
          );
        })
      )}
    </div>
  );
}
export default AppetizerCards;
