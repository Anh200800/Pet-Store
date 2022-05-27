import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import DetailProduct from './pages/DetailProduct';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="product" element={<Shop />} >
          </Route>
          <Route path="product/:productId" element={<DetailProduct />} ></Route>

        </Route>
          
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

