// components/CustomSlick.js
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from './CustomSlick.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftarrow from "../../icons/leftArrow.svg"
import rightarrow from "../../icons/rightArrow.svg"
import { PlaceWithCount } from "@/inerfaces/Place.interface";
import { generateListingLink } from "@/utils/link-generation.utils";
import { Config } from "@/config/base.config";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
      <div
        style={{ background: "RGB(250, 233, 229)", position: "absolute", right: "-46px", top: "44%", padding: "10px 13px", borderRadius: "50px", }} onClick={onClick}>
        <Image src={rightarrow} alt="In" className={`${styles.image} ${styles.slickArrow}`} />
      </div>
    </>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />

      <div
        style={{ background: "RGB(250, 233, 229)", position: "absolute", left: "-46px", top: "44%", padding: "10px 13px", borderRadius: "50px", }} onClick={onClick}>
        <Image src={leftarrow} alt="In" className={`${styles.image} ${styles.slickArrow}`} />
      </div>
    </>
  );
}
const CustomSlick = (props: { topCountries: PlaceWithCount[] }) => {
  const { topCountries } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow className={styles.slickArrow} />,
    prevArrow: <SamplePrevArrow className={styles.slickArrow} />

  };

  const handleOnCountryClick = (country: PlaceWithCount) => {
    const link = generateListingLink('uae', country.placeId);
    window.open(link, '_blank');
  }

  return (
    <div className={styles.container}>

      <div className={styles.sliderdiv}>
        <div className={styles.heading}>
          <h1>Top Countries</h1>
        </div>
        <div className={styles.countryGrid}>
          {
            topCountries.map((country, index) => {
              return (
                <div key={index} className={styles.countryCard} onClick={() => handleOnCountryClick(country)}>
                  <div className={styles.imageWrapper}>
                    <Image src={`${Config.imageBaseUrl}?id=${country.images?.length ? country.images[0] : ''}`} width={100} height={100} alt={country.name} className={styles.image} />
                    <div className={styles.gradient}></div>
                  </div>
                  <div className={styles.info}>
                    <h3>{country.name}</h3>
                    <p>{country.count} Packages</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <Slider {...settings} className={styles.slider}>
          {
            topCountries.map((country, index) => {
              return (
                <div key={index} className={styles['card-container']} onClick={() => handleOnCountryClick(country)}>
                  <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <Image src={`${Config.imageBaseUrl}?id=${country.images?.length ? country.images[0] : ''}`} width={100} height={100} alt={country.name} className={styles.image} />
                      <div className={styles.gradient}></div>
                    </div>
                    <div className={styles.textContainer}>
                      <h2 className={styles.title}>{country.name}</h2>
                      <p className={styles.description}>{country.count} Packages</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlick;
