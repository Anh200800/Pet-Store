import React from "react";
import Product from "./Product";
function ProductList ({data}) {
    return(
        <>
        {data.map((product) => {
            return (
                < >
    <Product product={product} />
               </>
            )
        }) }
        </>
    )
}
export default ProductList