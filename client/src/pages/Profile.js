import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const [orderState, setOrderState] = useState({
    items: [
      { quantity: 2, product: "5e22265f85c4b24aff235126" },
      { quantity: 1, product: "5e22265f85c4b24aff235127" }
    ],
    total: 0,
    tableNum: 0,
    gratuity: 0,
    tax: 0,
    grandTotal: 0
  });

  useEffect(() => {
    API.getUser(user.id).then(
      res => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
      },
      API.getProducts().then(res => {
        setProducts(res.data);
      })
    );
  }, [user]);

  // added another useEffect hook to grab appetizers from db
  useEffect(() => {
    API.getProducts().then(res => {
      setProducts(res.data);
    });
  }, []);

  const createOrderClick = () => {
    API.createOrder(
      orderState.items,
      orderState.tableNum,
      orderState.total,
      orderState.gratuity,
      orderState.tax,
      orderState.grandTotal
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => alert(err));
  };

  return (
    <div className="container Profile">
      <h1>On the profile page!</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <button onClick={createOrderClick}>Create Order</button>
      {/* Added map function to show database appetizer images and names*/}
      {products.length ? (
        <div>
          {products.map(product => (
            <div key={product._id}>
              <h1>{product.productName}</h1>
              <img src={product.imageURL} alt="appetizer"></img>
            </div>
          ))}
        </div>
      ) : (
        <p>No Products</p>
      )}
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Profile;
