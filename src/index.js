import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";

import store from './store/store';
import './sass/index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import DetailProduct from './pages/DetailProduct';
import Cart from '../src/pages/Cart'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Shop />}></Route>
            <Route path="product/:productId" element={<DetailProduct />}></Route>
            <Route path="product/cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

