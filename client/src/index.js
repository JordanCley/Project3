import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import {AuthProvider, useAuth} from './utils/auth'


import registerServiceWorker from './registerServiceWorker';

// Our Pages
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import TableNumber from "./pages/TableNumber";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import AppetizerPreview from "./pages/AppetizerPreview";
import FullAppetizer from "./pages/FullAppertizer";
import MyOrders from "./pages/MyOrders";
import ViewCheck from "./pages/ViewCheck";
import CardInfo from "./pages/CardInfo";
import AddTip from "./pages/AppTip";
import ConfirmPay from "./pages/ConfirmPay";

//Our Components
import Navbar from './components/Navbar';

// Here is if we have an id_token in localStorage
if (localStorage.getItem('id_token')) {
  // then we will attach it to the headers of each request from react
  // application via axios
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('id_token')}`;
}

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to="/signup" />;
}

ReactDOM.render(
  <AuthProvider>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <ProtectedRoute exact path="/">
            <App />
          </ProtectedRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <ProtectedRoute exact path="/profile">
            <Profile />
          </ProtectedRoute>
          <Route exact path="/table-number">
            <TableNumber />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/app-preview">
            <AppetizerPreview />
          </Route>
          <Route exact path="/full-app">
            <FullAppetizer />
          </Route>
          <Route exact path="/my-orders">
            <MyOrders />
          </Route>
          <Route exact path="/view-check">
            <ViewCheck />
          </Route>
          <Route exact path="/card-info">
            <CardInfo />
          </Route>
          <Route exact path="/add-tip">
            <AddTip />
          </Route>
          <Route exact path="/confirm-pay">
            <ConfirmPay />
          </Route>
        </Switch>
      </div>
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);
registerServiceWorker();
