import Navbar from './components/Navbar/Navbar';
import React from 'react';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  const searchData = (query) => {
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="App">
      <Navbar searchData={searchData} />
      <Hero />
      {/* Other components can be added here */}
    </div>
  );
}

export default App;