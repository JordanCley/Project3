import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./cheqmate-logo-radial-white.svg";
import "./App.css";
import { useAuth } from "./utils/auth";

function App() {
  const { user, logout } = useAuth();

  const history = useHistory();
  const goToTableInput = () => history.push("/table-input");
  const goToEditProfile = () => history.push("/profile");

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="welcome-text">Welcome {user.email}</h2>
      </div>
      <p className="App-intro">
        <button
          type="button"
          className="btn btn-danger logout-button mx-2"
          onClick={() => logout()}
        >
          Logout
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={goToTableInput}
        >
          Enter Table Number
        </button>
      </p>
    </div>
  );
}

export default App;
