import React, { useState, useEffect, useContext } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { OrderContext } from "../utils/context/OrderContext";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const {
    createOrderClick,
    viewOrderToPayClick,
    updateIsOrderPaidClick,
    viewAllOrdersClick,
    products, 
    addItemToCart
  } = useContext(OrderContext);

  useEffect(() => {
    API.getUser(user.id)
      .then(res => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
      })
      .catch(err => alert(err));
  }, [user]);

  // // added another useEffect hook to grab appetizers from db
  // useEffect(() => {
  //   API.getProducts()
  //     .then(res => {
  //       setProducts(res.data);
  //     })
  //     .catch(err => alert(err));
  // }, []);

  
  return (
    <div className="container Profile">
      <h1>On the profile page!</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>

      {/* buttons to test api routes */}
      <button onClick={createOrderClick}>Create Order</button>
      <button onClick={viewOrderToPayClick}>View Order to Pay</button>
      <button onClick={viewAllOrdersClick}>View All Past Orders</button>
      <button onClick={updateIsOrderPaidClick}>Pay</button>

      {/* Added map function to show database appetizer images and names*/}
      {products.length ? (
        <div>
          {products.map(product => (
            <div key={product._id}>
              <h1>{product.productName}</h1>
              <img src={product.imageURL} alt="appetizer"></img>
              <button onClick={()=> addItemToCart(product._id)}>Add to items list</button>
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
