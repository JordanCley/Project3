import React, { useState, useEffect } from 'react';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function Profile() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <div className="container Profile">
      <h1>On the profile page!</h1>
      <p>Username: {username}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Profile;