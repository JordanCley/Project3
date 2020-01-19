import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import API from "../../utils/API";

function Appetizers(props) {
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
      {app.length == 0 ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        app.map(appetizer => {
          return (
            <Card
              style={{ width: "18rem" }}
              onClick={() => props.itemPreview(appetizer)}
            >
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
export default Appetizers;
