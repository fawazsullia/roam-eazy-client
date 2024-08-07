'use client'

import Image, { StaticImageData } from "next/image";
import styles from "./Banner.module.css";
import { useEffect } from "react";

interface IBannerProps {
    image: StaticImageData;
}

const Banner = (props: IBannerProps) => {
    const { image } = props;

    return (
        <div className={styles.container}> 
        <div className={styles.banner}>
            <Image src={image} alt="banner" className={styles.bannerimage} />
        </div>
        </div>
    );
}

export default Banner;