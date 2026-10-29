import Navbar from './components/Navbar/Navbar';
import { useMemo, useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import styles from './App.module.css';
import Section from './components/Section/Section';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchGenres } from './helpers/api';

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      const [topData, newData, songs, genresRes] = await Promise.all([
        fetchTopAlbums(),
        fetchNewAlbums(),
        fetchSongs(),
        fetchGenres(),
      ]);

      if (!isMounted) return;

      setTopAlbumData(topData);
      setNewAlbumData(newData);
      setSongsData(songs);

      if (genresRes?.data) {
        setGenres([{ key: "all", label: "All" }, ...genresRes.data]);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredSongs = useMemo(() => {
    if (selectedFilterIndex === 0) return songsData;

    const selectedGenreKey = genres[selectedFilterIndex]?.key;
    return songsData.filter((song) => song.genre.key === selectedGenreKey);
  }, [selectedFilterIndex, songsData, genres]);

  return (
    <div className={styles.app}>
      <Navbar searchData={[...topAlbumData, ...newAlbumData]} />
      <Hero />
      <div className={styles.sectionContainer}>
        <Section title="Top Albums" data={topAlbumData} type="album" />
        <Section title="New Albums" data={newAlbumData} type="album" />
        <div className={styles.divider} />
        <Section
          title="Songs"
          data={filteredSongs}
          type="song"
          filterSource={genres}
          selectedFilterIndex={selectedFilterIndex}
          setSelectedFilterIndex={setSelectedFilterIndex}
        />
      </div>
    </div>
  );
}

export default App;