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
        <div className={styles.banner}>
            <Image src={image} alt="banner" sizes="100vw" style={{ width: '100%', height: '100%' }} // optional
                height={0} width={0} />
        </div>
    );
}

export default Banner;