import React from "react";
import PropTypes from 'prop-types';
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import SearchProduct from "./SearchProduct";
const SideBar = ({filters,onChange}) => {
  const handleSearchChange = (newSearch) => {
   const newFilters = {
     ...filters,
     title_like: newSearch.searchTerm
   }
  if (onChange) {
    onChange(newFilters)
    }
  console.log('new search: ',newSearch)
  }
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
      <SearchProduct onSubmit={handleSearchChange} />

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
