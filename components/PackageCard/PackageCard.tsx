import { useState } from "react";
import { Button } from "antd";
import styles from './PackageCard.module.css';
import Image from "next/image";
import badge from "../../assets/images/badge.svg"
import Link from "next/link";

interface IPackageCardProps {
    id: number;
    title: string;
    bannerImage: string;
    image1: string;
    image2: string;
    image3: string;
    price: string;
    details: { name: string, icon: string }[];
    verified: boolean;
}

const PackageCard = ({ id, image1, image2, image3, title, price, details, verified }: IPackageCardProps) => {
    const [currentImage, setCurrentImage] = useState(image1);
    const [activeButton, setActiveButton] = useState(1);

    const handleImageChange = (image, index) => {
        setCurrentImage(image);
        setActiveButton(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={currentImage}
                    className={styles.image}
                    alt="card"
                    width={400}
                    height={200}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', borderRadius: '20px' }}
                />
                <div className={styles.verifiedBadge}>
                    <p>Verified</p>
                    <Image src={badge} alt="badge" className={styles.badge} />
                </div>
                <div className={styles.buttonContainer}>
                    <button
                        onClick={() => handleImageChange(image1, 1)}
                        className={activeButton === 1 ? styles.active : ''}
                    ></button>
                    <button
                        onClick={() => handleImageChange(image2, 2)}
                        className={activeButton === 2 ? styles.active : ''}
                    ></button>
                    <button
                        onClick={() => handleImageChange(image3, 3)}
                        className={activeButton === 3 ? styles.active : ''}
                    ></button>
                </div>
            </div>

            <div className={styles.detailContainer}>
                <div className={styles.startContainer}>
                    <h3>{title}</h3>
                    <span className={styles.includes}>includes</span>
                    <div className={styles.featuresContainer}>
                        {details.map((item, index) => (
                            <li key={index}>
                                <Image
                                    src={item.icon}
                                    className={styles.iconimage}
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    style={{ width: '50', height: '50' }}
                                />
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </div>
                </div>
                <div className={styles.endContainer}>
                    <span className={styles.price}>{price}</span>
                    <Link href={`/details/${id}`}>
                        <Button className={styles.seemore}>see more</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
