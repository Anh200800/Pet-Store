import React from 'react';
import Shop from './pages/Shop';
import  { SkeletonTheme } from 'react-loading-skeleton'

function App() {
 
  return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">

    <div className="App">
      <Shop />
    </div>

        </SkeletonTheme>

  );
}

export default App;
