// components/CustomSlick.js
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from './CustomSlick.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import indonesia from "../../assets/images/indonesia.svg";
import turkey from "../../assets/images/turkey.svg";
import egypt from "../../assets/images/egypt.svg";
import indonesiamobile from "../../assets/images/indonesiamobile.svg";
import turkeymobile from "../../assets/images/trukeymobile.svg";
import egyptmobile from "../../assets/images/egyptmobile.svg";
import thailandmobile from "../../assets/images/thailandmobile.svg";
import leftarrow from "../../icons/leftArrow.svg"
import rightarrow from "../../icons/rightArrow.svg"

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
        <Image src={rightarrow} alt="In" className={styles.image} />
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
        <Image src={leftarrow} alt="In" className={styles.image} />
      </div>
    </>
  );
}
const CustomSlick = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  return (
    <div className={styles.container}>

      <div className={styles.sliderdiv}>
        <div className={styles.heading}>
          <h1>Top Countries</h1>
        </div>
        <div className={styles.countryGrid}>
          <div className={styles.countryCard}>
            <div className={styles.imageWrapper}>
              <Image src={indonesiamobile} alt="In" className={styles.image} />
              <div className={styles.gradient}></div>
            </div>
            <div className={styles.info}>
              <h3>Indonesia</h3>
              <p>65 Packages</p>
            </div>
          </div>
          <div className={styles.countryCard}>
            <div className={styles.imageWrapper}>
              <Image src={turkeymobile} alt="tu" className={styles.image} />
              <div className={styles.gradient}></div>
            </div>
            <div className={styles.info}>
              <h3>Turkey</h3>
              <p>105 Packages</p>
            </div>
          </div>
          <div className={styles.countryCard}>
            <div className={styles.imageWrapper}>
              <Image src={egyptmobile} alt="eg" className={styles.image} />
              <div className={styles.gradient}></div>
            </div>
            <div className={styles.info}>
              <h3>Egypt</h3>
              <p>54 Packages</p>
            </div>
          </div>
          <div className={styles.countryCard}>
            <div className={styles.imageWrapper}>
              <Image src={thailandmobile} alt="th" className={styles.image} />
              <div className={styles.gradient}></div>
            </div>
            <div className={styles.info}>
              <h3>Thailand</h3>
              <p>240 Packages</p>
            </div>
          </div>
        </div>
        <Slider {...settings} className={styles.slider}>
          <div className={styles['card-container']}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={indonesia} alt="Indonesia" className={styles.image} />
                <div className={styles.gradient}></div>
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Indonesia</h2>
                <p className={styles.description}>65 Packages</p>
              </div>
            </div>
          </div>
          <div className={styles['card-container']}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={turkey} alt="Turkey" className={styles.image} />
                <div className={styles.gradient}></div>
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Turkey</h2>
                <p className={styles.description}>105 Packages</p>
              </div>
            </div>
          </div>
          <div className={styles['card-container']}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={egypt} alt="Egypt" className={styles.image} />
                <div className={styles.gradient}></div>
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.title}>Egypt</h2>
                <p className={styles.description}>54 Packages</p>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default CustomSlick;
