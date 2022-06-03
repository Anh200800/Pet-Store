import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import ProductList from '../components/ProductList';
import productApi from '../api/productApi';
import SkeletonCard from '../components/SkeletonCard';

function Shop() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
     setTimeout(() => {

       const fetchProductList = async () => {
       try {
       const data = await productApi.getAll();
       console.log('Fetch products successfully: ', data);
       setProductList(data);
       } catch (error) {
       console.log('Failed to fetch product list: ', error);
       }
       setLoading(false)
       }
       fetchProductList();
     }, 1000)
   }, []);


   
   return (
     <div className="shop">
       
       <div className="container">
         <div className="shop-grid">
           <div className="shop-navbar">
             <NavBar />
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
