import { useState } from "react";
import { Button } from "antd";
import styles from './PackageCard.module.css';
import Image from "next/image";
import badge from "../../assets/images/badge.svg"
import NightIcon from "../../assets/images/nights.svg"
import FlightIcon from "../../assets/images/flight.svg"
import InsuranceIcon from "../../assets/images/Insurance.svg"
import HotelIcon from "../../assets/images/Hotel.svg"
import TransportIcon from "../../assets/images/Transportation.svg"
import Link from "next/link";
import { Config } from "@/config/base.config";

interface IPackageCardProps {
    id: string;
    title: string;
    images: string[];
    price: number;
    verified: boolean;
    numberOfNights: number;
    travelInsurance?: boolean;
    hotels?: { name: string, stars: number, nights: number, city: string }[];
    airTickets?: boolean;
    airPortTransfers?: string;
}

const PackageCard = ({ id, images, title, price, verified, travelInsurance, hotels, airPortTransfers, airTickets, numberOfNights }: IPackageCardProps) => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [activeButton, setActiveButton] = useState(1);

    const handleImageChange = (image: any, index: any) => {
        setCurrentImage(image);
        setActiveButton(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={`${Config.imageBaseUrl}?id=${currentImage}`}
                    className={styles.image}
                    alt="package image"
                    layout="fill"
                    objectFit="cover"
                />
                <div className={styles.verifiedBadge}>
                    <p>Verified</p>
                    <Image src={badge} alt="badge" className={styles.badge} />
                </div>
                <div className={styles.buttonContainer}>
                    {
                        images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => handleImageChange(image, index + 1)}
                                className={activeButton === index + 1 ? styles.active : ''}
                            ></button>
                        ))
                    }
                </div>
            </div>

            <div className={styles.detailContainer}>
                <div className={styles.startContainer}>
                    <h3>{title}</h3>
                    <span className={styles.includes}>includes</span>
                    <div className={styles.featuresContainer}>
                        {
                            <li>
                                <Image
                                    src={NightIcon}
                                    className={styles.iconimage}
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    style={{ width: '50', height: '50' }}
                                />
                                <span>{numberOfNights} Nights</span>
                            </li>
                        }
                        {travelInsurance && <li>
                            <Image
                                src={InsuranceIcon}
                                className={styles.iconimage}
                                alt="icon"
                                width={50}
                                height={50}
                                style={{ width: '50', height: '50' }}
                            />
                            <span>Insurance</span>
                        </li>
                        }
                        {hotels?.length && <li>
                            <Image
                                src={HotelIcon}
                                className={styles.iconimage}
                                alt="icon"
                                width={50}
                                height={50}
                                style={{ width: '50', height: '50' }}
                            />
                            <span>Hotel</span>
                        </li>
                        }
                        {airPortTransfers && <li>
                            <Image
                                src={TransportIcon}
                                className={styles.iconimage}
                                alt="icon"
                                width={50}
                                height={50}
                                style={{ width: '50', height: '50' }}
                            />
                            <span>Transportation</span>
                        </li>
                        }
                        {airTickets && <li>
                            <Image
                                src={FlightIcon}
                                className={styles.iconimage}
                                alt="icon"
                                width={50}
                                height={50}
                                style={{ width: '50', height: '50' }}
                            />
                            <span>Flight</span>
                        </li>
                        }
                    </div>
                </div>
                <div className={styles.endContainer}>
                    <span className={styles.price}>{price}</span>
                    <a href={`/details/${id}`} target="_blank">
                        <Button className={styles.seemore}>see more</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
