import React, {useEffect, useState} from 'react';
import SideBar from "../components/SideBar";
import ProductList from '../components/ProductList';
import productApi from '../api/productApi';
import SkeletonCard from '../components/SkeletonCard';

function Shop() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({});

   useEffect(() => {
     setTimeout(() => {

       const fetchProductList = async () => {
       try {
       const data = await productApi.getAll(filters);
       console.log('Fetch products successfully: ', data);
       setProductList(data);
       } catch (error) {
       console.log('Failed to fetch product list: ', error);
       }
       setLoading(false)
       }
       fetchProductList();
     }, 1000)
   }, [filters]);

const handleFiltersChange = (newFilters) => {
  setFilters((prevFilters)=> ({
    ...prevFilters,
    ...newFilters
  }))
}
   console.log('check: ', filters)
   return (
     <div className="shop">
       
       <div className="container">
         <div className="shop-grid">
           <div className="shop-navbar">
             <SideBar filters={filters} onChange={handleFiltersChange} />
           </div>
           <div className="shop-product">
         

             {

               loading ? <SkeletonCard  /> :  <ProductList data={productList} />
                } 
           </div>
         </div>
       </div>
     </div>
   );
}

export default Shop;
