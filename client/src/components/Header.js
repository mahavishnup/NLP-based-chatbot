import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => (
  // document.addEventListener('DOMContentLoaded', function () {
  //     var elems = document.querySelectorAll('.sidenav');
  //     var instances = M.Sidenav.init(elems, options);
  // });

  // $(document).ready(function () {
  //     $('.sidenav').sidenav();
  // });

  <nav
    className="lighten-1"
    role="navigation"
  >
    <div className="nav-wrapper">
      <Link to={"/"} classNameName="brand-logo" id="logo-container">
        NLP Chatbot
      </Link>
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
      </ul>
      <ul id="nav-mobile" className="sidenav">
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
      </ul>
      <Link to={"#"} data-target="nav-mobile" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </Link>
    </div>
  </nav>
);

export default Header;