import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

function SearchProduct(props) {
    const {onSubmit} = props
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeoutRef = useRef(null)

    const handleSearchTearmChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)
        if(!onSubmit) return;

        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value
            }
            onSubmit(formValues)
        }, 300)
    }
  return (
     <input
          className="sidebar-search"
          typre="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={handleSearchTearmChange}
        />
  )
}

SearchProduct.propTypes = {
    onSubmit: PropTypes.func
}

export default SearchProduct
