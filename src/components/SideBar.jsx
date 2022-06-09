import React from "react";
import PropTypes from 'prop-types';
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
const SideBar = ({filters,onChange}) => {
  const handleCategoryChange = (newCategoryId) => {
    const newFilters = {
      ...filters,
      "category.id": newCategoryId,
    };
    onChange(newFilters)
  }
  console.log(onchange)
  const handlePriceChange = (values) => {
    console.log(values)
    if (onChange) {
     onChange(values)
    }
  }
    return (
      <div className="sidebar">
        <input
          className="sidebar-search"
          typre="text"
          placeholder="Search here"
        />
        <FilterByPrice onChange={handlePriceChange} />
       
        <FilterByCategory onChange={handleCategoryChange} /> 
      </div>
    );
};
SideBar.propTypes = {
  filters: PropTypes.object.isRequired,
 onChange: PropTypes.func
}
export default SideBar;
