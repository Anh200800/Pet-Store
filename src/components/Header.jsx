import React, {useState} from "react";
import logo from "../assets/images/logo.png";
import line from "../assets/images/lines.png";
import cart from "../assets/images/icon-cart.png";
import search from "../assets/images/icon-search.png";
import bars from "../assets/images/icon-bars.png";
import clear from "../assets/images/x.png";


import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "../features/Cart/selectors";

function Header() {
  const cartItemsCount = useSelector(cartItemsCountSelector)
    const [click, setClick] = useState(false);
const handleClick = () => setClick(!click)
console.log('chrck', click)
  return (
    <div className="wrapper">
      <img src={line} alt="" />
        <div className="container">
      <div className="header">
            <img src={logo} alt="" className="header-logo" />
              <ul className={click ? 'header-menu active ' : 'header-menu'}  >
                <li className="header-menu-item">
                  <a className="header-menu-link">Home</a>
                </li>
                <li className="header-menu-item">
                  <a className="header-menu-link">About</a>
                </li>
                <li className="header-menu-item">
                  <a className="header-menu-link">Pages</a>
                </li>
                <li className="header-menu-item">
                  <a className="header-menu-link">News</a>
                </li>
                <li className="header-menu-item">
                  <a className="header-menu-link">
                    <Link to="/product">Shop</Link>
                  </a>
                </li>
                <li className="header-menu-item">
                  <a className="header-menu-link">Contact</a>
                </li>
              </ul>
            <div className="header-icons">
              <img src={search} alt="" className="header-search" />
              <Link to="product/cart">
              <a href="" className="header-cart">
                <img src={cart} alt="" className="header-carticon" />
                <span className="header-badge">{cartItemsCount}</span>
              </a>
              </Link>
              <a  className="header-bars" onClick={handleClick}><img src={click ? clear : bars} alt="" /></a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
