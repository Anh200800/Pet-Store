import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FiChevronRight } from "react-icons/fi";
import categoryApi from '../api/categoryApi';

function FilterByCategory({onChange}) {
    const [categoryList, setCategoryId] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await categoryApi.getAll()
                setCategoryId(response)
                console.log(response)
            } catch (error) {
                console.log('Failed to fetch category list', error)
            }
        })()
    },[])
    const handleCategoryClick = (category) => {
        if(onChange){
            onChange(category.id)
        }
    }

  return (
<div className="sidebar-category">
          <div className="sidebar-list">
            <span>Categories</span>
            <ul>
                {categoryList.map((category)=>(
<li className="sidebar-title" key={category.id} onClick={()=> handleCategoryClick(category)}>{category.name}<FiChevronRight/></li>
                ))}
          </ul>
          </div>
        </div>
  )
}

FilterByCategory.propTypes = {}

export default FilterByCategory
