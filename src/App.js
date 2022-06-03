import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
function App() {
 
  return (

    <div className="App">
<nav>
     <Header />
      <Banner />
</nav>
      <Outlet />
      <Footer />
    </div>


  );
}

export default App;
