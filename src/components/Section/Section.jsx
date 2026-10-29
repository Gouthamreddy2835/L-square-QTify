import { useState } from 'react';
import styles from './Section.module.css';
import Card from '../Card/Card';
import { CircularProgress } from '@mui/material';

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse" : "Show All"}
        </h4>
      </div>

      {!data?.length ? (
        <div className={styles.progressBar}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {data.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;