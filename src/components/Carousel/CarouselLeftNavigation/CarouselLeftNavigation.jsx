import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import LeftArrow from "../../../assets/LeftArrow.png";
import styles from "./CarouselLeftNavigation.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <img
          src={LeftArrow}
          alt="Previous slide"
          onClick={() => swiper.slidePrev()}
        />
      )}
    </div>
  );
};

export default CarouselLeftNavigation;