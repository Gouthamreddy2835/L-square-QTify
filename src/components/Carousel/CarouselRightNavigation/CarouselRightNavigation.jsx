import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import RightArrow from "../../../assets/RightArrow.png";
import styles from "./CarouselRightNavigation.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <img
          src={RightArrow}
          alt="Next slide"
          onClick={() => swiper.slideNext()}
        />
      )}
    </div>
  );
};

export default CarouselRightNavigation;