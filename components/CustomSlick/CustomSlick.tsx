// CustomSlick.js

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import LeftArrowIcon from '../../icons/leftArrow.svg';
import RightArrowIcon from '../../icons/rightArrow.svg';
import styles from './CustomSlick.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlick = ({ customComponents }) => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {customComponents.map((item, index) => (
          <div className={styles.slide} key={index}>
            <Image src={item.image} alt={item.title} className={styles.image} layout="fill" objectFit="cover" />
            <div className={styles.slideContent}>
              <h3>{item.title}</h3>
              <p>{item.subText}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles.navigation}>
        <button onClick={prevSlide} className={styles.prevButton}>
          <Image src={LeftArrowIcon} alt="Previous" />
        </button>
        <button onClick={nextSlide} className={styles.nextButton}>
          <Image src={RightArrowIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default CustomSlick;
