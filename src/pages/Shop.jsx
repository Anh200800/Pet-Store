import React, {useEffect} from 'react';
import Banner from "../components/Banner"
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import productApi from '../api/productApi';

function Shop() {
  const [productList, setProductList] = useState([]);
   useEffect(() => {
  const fetchProductList = async () => {
  try {
  // const params = { _page: 1, _limit: 5 };
  const response = await productApi.getAll();
  console.log('Fetch products successfully: ', response);
  setProductList(response);
  } catch (error) {
  console.log('Failed to fetch product list: ', error);
  }
  }
  fetchProductList();
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

        <Product data={productList} />
        </div>

        </div>
      </div>
      </div>
  );
}

export default Shop;
