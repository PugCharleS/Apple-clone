import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper" id="nav">
        <Link to={`/`} className="brand-logo">Andoramen</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/categoria/ramen'>Ramen</Link></li>
          <li><Link to='/categoria/drink'>Drinks</Link></li>
          <li><Link to='/categoria/dessert'>Desserts</Link></li>
          <li><Link to={`/cart`}><CartWidget /></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
