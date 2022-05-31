import React from "react";
import logo from "../assets/images/logo.png";
import line from "../assets/images/lines.png";
import cart from "../assets/images/icon-cart.png";
import search from "../assets/images/icon-search.png";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "../features/Cart/selectors";

function Header() {
  const cartItemsCount = useSelector(cartItemsCountSelector)
  return (
    <div className="wrapper">
      <img src={line} alt="" />
      <div className="header">
        <div className="container">
          <div className="header-main">
            <img src={logo} alt="" className="header-logo" />
            <div className="menu">
              <ul className="menu-list">
                <li className="menu-item">
                  <a className="menu-link">Home</a>
                </li>
                <li className="menu-item">
                  <a className="menu-link">About</a>
                </li>
                <li className="menu-item">
                  <a className="menu-link">Pages</a>
                </li>
                <li className="menu-item">
                  <a className="menu-link">News</a>
                </li>
                <li className="menu-item">
                  <a className="menu-link">
                    <Link to="/product">Shop</Link>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link">Contact</a>
                </li>
              </ul>
            </div>
            <div className="header-icons">
              <img src={search} alt="" className="header-search" />
              <Link to="product/cart">
              <a href="" className="header-cart">
                <img src={cart} alt="" className="header-carticon" />
                <span className="header-badge">{cartItemsCount}</span>
              </a>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
