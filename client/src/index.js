import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";
//Here is where we import the Global State Context Provider
import { QorderProvider } from "../src/utils/QorderStore";

import "./index.css";
import App from "./App";
import { AuthProvider, useAuth } from "./utils/auth";

import registerServiceWorker from "./registerServiceWorker";

// Our Pages
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import TableNumber from "./pages/TableNumber";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import AppetizerPreview from "./pages/AppetizerPreview";
import AppetizerList from "./pages/AppetizerList";
import ViewCart from "./pages/ViewCart";
import ViewCheck from "./pages/ViewCheck";
import CardInfo from "./pages/CardInfo";
import AddTip from "./pages/AddTip";
import ConfirmPay from "./pages/ConfirmPay";
import OrderContextProvider from "./utils/context/OrderContext";

//Our Components
import Navbar from "./components/Navbar";

// Here is if we have an id_token in localStorage
if (localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react
  // application via axios
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("id_token")}`;
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
    <OrderContextProvider>
      <Router>
        <div>
          <QorderProvider>
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
              <ProtectedRoute exact path="/table-input">
                <TableNumber />
              </ProtectedRoute>
              <ProtectedRoute exact path="/menu">
                <Menu />
              </ProtectedRoute>
              <ProtectedRoute exact path="/checkout">
                <Checkout />
              </ProtectedRoute>
              <ProtectedRoute exact path="/app-preview">
                <AppetizerPreview />
              </ProtectedRoute>
              <ProtectedRoute exact path="/appetizer-list">
                <AppetizerList />
              </ProtectedRoute>
              <ProtectedRoute exact path="/my-orders">
                <ViewCart />
              </ProtectedRoute>
              <ProtectedRoute exact path="/view-check">
                <ViewCheck />
              </ProtectedRoute>
              <ProtectedRoute exact path="/card-info">
                <CardInfo />
              </ProtectedRoute>
              <ProtectedRoute exact path="/add-tip">
                <AddTip />
              </ProtectedRoute>
              <ProtectedRoute exact path="/confirm-pay">
                <ConfirmPay />
              </ProtectedRoute>
            </Switch>
          </QorderProvider>
        </div>
      </Router>
    </OrderContextProvider>
  </AuthProvider>,
  document.getElementById("root")
);
registerServiceWorker();
