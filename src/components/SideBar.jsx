import React from "react";
import { FiChevronRight } from "react-icons/fi";

const SideBar = () => {
    return (
      <div className="sidebar">
        <input
          className="sidebar-search"
          typre="text"
          placeholder="Search here"
        />
        <div className="sidebar-box">
          <h3>Price</h3>
          <input type="range" min="0" max="11" className="sidebar-range" />
          <div className="sidebar-price">
            <h4>$50 - $500</h4>
            <a className="sidebar-filter">Filter</a>
          </div>
        </div>
        <div className="sidebar-category">
          <div className="sidebar-list">
            <h3>Categories</h3>
            <h4 className="sidebar-title">
              Dog food <FiChevronRight />
            </h4>
            <h4 className="sidebar-title">
              pet Care <FiChevronRight />
            </h4>
            <h4 className="sidebar-title">
              Pet Natural <FiChevronRight />
            </h4>
            <h4 className="sidebar-title">
              Toy for Pes <FiChevronRight />
            </h4>
            <h4 className="sidebar-title">
              Clothing <FiChevronRight />
            </h4>
            <h4 className="sidebar-title">
              Heathy Food <FiChevronRight />
            </h4>
          </div>
        </div>
      </div>
    );
};

export default SideBar;
