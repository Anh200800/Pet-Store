import React from "react";
import Product from "./Product";
function ProductList ({data}) {
    console.log('check data: ', data)
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