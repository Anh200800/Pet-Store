import React, {useEffect, useState} from 'react';
import Banner from "../components/Banner"
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import productApi from '../api/productApi';
import SheletonCard from '../components/SheletonCard';


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
     }, 5000)
   }, []);
   
   return (
     <div className="shop">
      <Header />
      <Banner />
      <div className="container">

      <div className="shop-grid">
        <div className="shop-navbar">
        <NavBar />
        </div>
           <div className="shop-product">
             

                {

               loading ? <SheletonCard cards={8} /> :  <Product data={productList} />
                } 
      
            
        </div>

        </div>
      </div>
      </div>
  );
}

export default Shop;
