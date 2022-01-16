import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav">
      <Link to={`/`} className="nav-logo"><i className="fab fa-apple"></i></Link>
      <Link to='/categoria/Mac'  className="nav-link">Mac</Link>
      <Link to='/categoria/iPad' className="nav-link">iPad</Link>
      <Link to='/categoria/iPhone' className="nav-link">iPhone</Link>
      <Link to='/categoria/Watch' className="nav-link">Watch</Link>
      <Link to='/categoria/Airpods' className="nav-link">Airpods</Link>
      <Link to='/categoria/' className="nav-link"><i className="fas fa-search"></i></Link>
      <Link to={`/cart`} className="nav-link"><CartWidget /></Link>
    </nav>
  );
}

export default NavBar;
