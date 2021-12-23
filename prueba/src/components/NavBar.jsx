import React from "react";
import './NavBar.css';
import './CartWidget';
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <div class="nav-wrapper" id="nav">
        <a href="#" class="brand-logo">Andoramen</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Menu</a></li>
          <li><a className="cart-icon"><CartWidget/></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
