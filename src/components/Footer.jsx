import React from 'react'
import logo from "../assets/images/logofooter.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import instagram from "../assets/images/instagram.png";
import pinterest from "../assets/images/pinterest.png";

import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/gallery4.png";
import gallery5 from "../assets/images/gallery5.png";
import gallery6 from "../assets/images/gallery6.png";



function Footer() {
    return (
      // <div className="wrapper">
        <div className="footer">
          <div className="footer-background">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="footer-main">
                <div className="footer-column">
                  <a className="footer-logo">
                    <img src={logo} alt="" />
                  </a>
                  <div className="footer-desc text">
                    Tincidunt elit magnis nulla facilisis sagittis maecenas.
                    Sapien nunced amet dolores.
                  </div>
                  <div className="social">
                    <a href="#" className="social-item">
                      <img src={facebook} />
                    </a>
                    <a href="#" className="social-item">
                      <img src={twitter} />
                    </a>
                    <a href="#" className="social-item">
                      <img src={instagram} />
                    </a>
                    <a href="#" className="social-item">
                      <img src={pinterest} />
                    </a>
                  </div>
                </div>
                <div className="footer-column">
                  <h3 className="footer-heading">Links</h3>
                  <ul className="footer-links">
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        Pet Services
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        About us
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        Pet Boarding
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        Latest News
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h3 className="footer-heading">Gallery</h3>
                  <ul className="footer-list">
                    <li className="footer-img">
                      <a href="#" className="footer-link">
                        <img src={gallery1} alt="" />
                      </a>
                    </li>
                    <li className="footer-img">
                      <a href="#" className="footer-link">
                        <img src={gallery2} alt="" />
                      </a>
                    </li>
                    <li className="footer-img">
                      <a href="#" className="footer-link">
                        <img src={gallery3} alt="" />
                      </a>
                    </li>
                    <li className="footer-img">
                      <a href="#" className="footer-link">
                        <img src={gallery4} alt="" />
                      </a>
                    </li>
                    <li className="footer-img">
                      <a href="#" className="footer-link">
                        <img src={gallery5} alt="" />
                      </a>
                    </li>
                    <li className="footer-img">
                      <a href="#" className="footer-link">
                        <img src={gallery6} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h3 className="footer-heading">Contact</h3>
                  <ul className="footer-info">
                    <li>
                      88 Broklyn Golden Street, New York United States of
                      America
                    </li>
                    <li>+23 425 4466 80</li>
                  </ul>
                  <ul className="footer-info">
                    <li>Mon - Sun: 8AM - 8PM</li>
                    <li>needhelp@company.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-line container"></div>
          <div className="footer-bottom">
            <p className="footer-centertext">
              © All Copyright 2022 by Wanzor.com
            </p>
          </div>
        </div>
      // </div>
    );
}

export default Footer