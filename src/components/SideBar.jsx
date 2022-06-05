import React from "react";
import PropTypes from 'prop-types';
import FilterByCategory from "./FilterByCategory";
const SideBar = ({filters, onchange}) => {
  const handleCategoryChange = (newCategoryId) => {
    if(!onchange) return;
    const newFilters = {
      ...filters,
      "category.id": newCategoryId
    };
    onchange(newFilters)
    console.log("category.id")
  }
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
        <FilterByCategory onchange={handleCategoryChange} /> 
      </div>
    );
};
SideBar.propTypes = {
  filters: PropTypes.object.isRequired,
  onchange: PropTypes.func
}
export default SideBar;
