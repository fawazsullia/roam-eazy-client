import { Button } from "antd";
import styles from './PackageCard.module.css';
import Image from "next/image";

import BannerImage from '../../assets/images/banner1.jpeg'

interface IPackageCardProps {
    title: string;
}

const PackageCard = ({ title }: IPackageCardProps) => {

    return <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src={BannerImage} className={styles.image} alt="banner" sizes="100vw" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className={styles.detailContainer}>
            <span>includes</span>
            <div className={styles.featuresContainer}>
                <span>5 nights</span>
                <span>Flight</span>
                <span>Insurance</span>
                <span>Transportation</span>
                <span>Hotel</span>
            </div>
            <div className={styles.endContainer}>
                <span>AED 1999</span>
                <Button>Book Now</Button>
            </div>
        </div>
    </div>

};

export default PackageCard;