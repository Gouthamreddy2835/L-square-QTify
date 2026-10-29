import Navbar from './components/Navbar/Navbar';
import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import styles from './App.module.css';

function App() {
  const [searchData, setSearchData] = useState([]);


  return (
    <div className={styles.app}>
      <Navbar searchData={searchData} />
      <Hero />
    </div>
  );
}

export default App;