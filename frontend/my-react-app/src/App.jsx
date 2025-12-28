import React from 'react';
import './App.css';
import CategorySection from './components/CategorySection';
import BottomBanner from './components/BottomBanner';
import Footer from './components/Footer'
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="App">
      <CategorySection />
      <BottomBanner />

       <Footer/>
       <ChatBot />
     
    </div>
    
  );
}

export default App;