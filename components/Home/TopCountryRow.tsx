import React from 'react';
import CustomSlick from '../CustomSlick/CustomSlick';
import styles from './TopCountryRow.module.css';
import pic from '../../assets/images/banner1.jpeg'
const TopCountryRow = () => {
    const customData = [
        {
          image: pic,
          title: "Innovative Solutions",
          subText: "Explore cutting-edge solutions tailored for your business needs.",
        },
        {
          image: pic,
          title: "Creative Design",
          subText: "Our creative team brings your ideas to life with stunning designs.",
        },
        {
          image: pic,
          title: "Advanced Analytics",
          subText: "Gain insights from data with our advanced analytics services.",
        },
        {
          image: pic,
          title: "Advanced Analytics",
          subText: "Gain insights from data with our advanced analytics services.",
        },
      ];
    
      return (
        <div>
          <CustomSlick customComponents={customData} />
        </div>
      );
    };

export default TopCountryRow;
