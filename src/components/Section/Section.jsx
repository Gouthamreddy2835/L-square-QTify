import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
import styles from "./Section.module.css";

const Section = ({
  title,
  data,
  type,
  filterSource,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!filterSource && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse"}
          </h4>
        )}
      </div>

      {filterSource && (
        <Filters
          filters={filterSource}
          selectedFilterIndex={selectedFilterIndex}
          setSelectedFilterIndex={setSelectedFilterIndex}
        />
      )}

      {!data?.length ? (
        <div className={styles.progressBar}>
          <CircularProgress />
        </div>
      ) : (
        <div className={styles.cardsContainer}>
          {carouselToggle ? (
            <Carousel
              data={data}
              renderComponent={(item) => <Card data={item} type={type} />}
            />
          ) : (
            <div className={styles.cardGrid}>
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;