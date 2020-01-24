import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import API from './../utils/API';
import {useAuth} from '../utils/auth'
import '../index.css';

function Signup() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { isLoggedIn } = useAuth()

  const history = useHistory()

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(formState.firstName, formState.lastName, formState.email, formState.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        history.replace('/login');
      })
      .catch(err => alert(err));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="container sign-up-page bg-table-in-vintage-restaurant">
      <h1>Signup</h1>
      <form onSubmit={handleFormSubmit}>
      <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="form-control"
            placeholder="First Name goes here..."
            name="firstName"
            type="text"
            id="firstName"
            onChange={handleChange}
          />
        </div>
      <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="form-control"
            placeholder="Last Name goes here..."
            name="lastName"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            className="form-control"
            placeholder="Email goes here..."
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            className="form-control"
            placeholder="Password goes here..."
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p className="sign-up-page-component">
          Or Already have an account with us?
        </p>
        <Link to="/login">
          <button className="profile-page-button-containers">
            Go to Login
          </button>
        </Link>
    </div>
  );
}

export default Signup;
