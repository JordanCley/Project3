import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import logo from "./cheqmate-logo.svg";
import "../../index.css";

const createLink = ({ text, to, ...rest }) => {
  const className = "nav-link";
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <span
      role="button"
      className={className}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {text}
    </span>
  );
};

function NavLinks() {
  const { isLoggedIn, logout } = useAuth();
  let links = [];
  if (isLoggedIn) {
    links.push({ text: "Profile", to: "/profile" });
    links.push({ text: "Menu", to: "/menu" });
    links.push({ text: "Logout", onClick: () => logout() });
  } else {
    links.push({ text: "Signup", to: "/signup" });
    links.push({ text: "Login", to: "/login" });
  }
  return (
    <ul className="navbar-nav">
      {links.map((link, i) => (
        <li key={i} className="nav-item">
          {createLink(link)}
        </li>
      ))}
    </ul>
  );
}

const goBackBtn = () => {
  window.history.back();
};

function Navbar() {
  return (
    <nav className="navbar nav-sign-up navbar-expand navbar-dark bg-primary">
      <div className="container inner-nav-container">
        <span id="left-arrow-icon" onClick={goBackBtn}>
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </span>
        <Link className="navbar-brand" to="/">
          <img src={logo} className="cheqmate-logo" alt="cheqmate logo" />
        </Link>
        <a className="navbar-brand icon" id="utensils-icon" href="/menu">
          <FontAwesomeIcon icon={faUtensils} />
        </a>
        <a className="navbar-brand icon" id="creditcard-icon" href="/card-info">
          <FontAwesomeIcon icon={faCreditCard} />
        </a>
        <a className="navbar-brand icon" href="/my-orders"></a>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
