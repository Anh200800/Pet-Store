import { useState, useEffect } from "react"
import productApi from "../api/productApi"
export default function useProductDetail(productId) {
    const [product,setProduct] = useState({})
    const [Loading,setLoading] = useState(true)
useEffect(()=> {
     const fetchProductDetail = async () => {
       try {
       const result = await productApi.get(productId);
       console.log('Fetch products successfully: ', result);
       setProduct(result);
       } catch (error) {
       console.log('Failed to fetch product list: ', error);
       }
       setLoading(false)
       }
       fetchProductDetail();
} ,[productId]);
return {product, Loading}
    
}