import React from 'react';
import './App.css';
import CategorySection from './components/CategorySection';
import BottomBanner from './components/BottomBanner';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <CategorySection />
      <BottomBanner />

       <Footer/>
     
    </div>
    
  );
}

export default App;