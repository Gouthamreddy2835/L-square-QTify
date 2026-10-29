import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import styles from './App.module.css';
import Section from './components/Section/Section';
import { fetchTopAlbums, fetchNewAlbums } from './helpers/api';

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const loadAlbums = async () => {
      const [topAlbums, newAlbums] = await Promise.all([
        fetchTopAlbums(),
        fetchNewAlbums(),
      ]);

      if (isMounted) {
        setTopAlbumData(topAlbums);
        setNewAlbumData(newAlbums);
      }
    };

    loadAlbums();

    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <div className={styles.app}>
      <Navbar searchData={[...topAlbumData, ...newAlbumData]} />
      <Hero />
      <div className={styles.sectionContainer}>
        <Section title="Top Albums" data={topAlbumData} type="album" />
        <Section title="New Albums" data={newAlbumData} type="album" />
      </div>
    </div>
  );
}

export default App;