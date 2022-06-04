import React from "react";
const SideBar = () => {
    return (
      <div className="sidebar">
          <input className="sidebar-search" typre="text" placeholder="Search here" />
        <div className="sidebar-box">
          <h3>Price</h3>
          <input type="range" min="0" max="11" className="sidebar-range" />
          <div className="sidebar-price">
            <h4>$50 - $500</h4>
            <a className="sidebar-filter">Filter</a>
          </div>
            </div>
      </div>
  );
};

export default SideBar;
