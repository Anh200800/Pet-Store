
import React, { useState } from 'react'

function FilterByPrice({ onChange }) {
    const [values, setValues] = useState({
        price_lte: 500
    })
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    };
    const handleSubmit = () => {
        console.log(values)
        if (onChange) onChange(values)
      
    }
  return (
    <div className="sidebar-box">
      <h3 className="titlefilter">Price</h3>
      <input
        max="500"
        type="range"
        name="price_lte"
        value={values.price_lte}
        onChange={handleOnchange}
        className="sidebar-range"
      />
      <div className="sidebar-price">
        <h4 className="sidebar-number">$0 - ${values.price_lte}</h4>
        <a className="sidebar-filter" onClick={handleSubmit}>
          Filter
        </a>
      </div>
    </div>
  );
}

export default FilterByPrice