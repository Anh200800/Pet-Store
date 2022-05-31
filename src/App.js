import React from 'react';
import Shop from './pages/Shop';
import { Outlet } from 'react-router-dom';
import DetailProduct from './pages/DetailProduct';
import Header from './components/Header';
import Banner from './components/Banner';
import Cart from './pages/Cart';
function App() {
 
  return (

    <div className="App">
<nav>
     <Header />
        <Banner />
</nav>
<Outlet>
        <Cart />
  {/* <Shop /> */}
</Outlet>
    </div>


  );
}

export default App;
