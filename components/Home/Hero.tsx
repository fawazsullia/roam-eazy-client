import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import styles from './Hero.module.css';
import SearchContainer from '../SearchContiner/SearchContainer';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Image className={styles.image} src="hero-banner.jpg" alt="Roam Eazy Tour packages banner image" layout="fill" objectFit="cover" />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, #0081B0 7.54%, rgba(0, 0, 0, 0.178) 29.76%)',
          pointerEvents: 'none', // Ensures clicks pass through the overlay
        }}
      ></div>
    </div>
  );
}

export default Hero;