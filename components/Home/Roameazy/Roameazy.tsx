'use client'
import Styles from "./roameazy.module.css"
import Shop from "../../../icons/shop.svg"
import Dollar from '../../../icons/dollar.svg';
import Calendar from '../../../icons/calendar.svg'
import Image from "next/image";

export default function Roameazy() {
    return (
        <>
            <div className={Styles.container}>
                <h1 className={Styles.mainHeading}>Why RoamEazy?</h1>
                <div className={Styles.cardsContainer}>
                    <div className={Styles.card}>
                        <div className={Styles.iconContainer}>
                            {/* Add your icon here, for example using Font Awesome or an image */}

                            <Image src={Shop} alt="slick-left" className={Styles.icon} />
                        </div>
                        <h2 className={Styles.cardHeading}>Wide Selection of Curated Travel Packages</h2>
                        <p className={Styles.cardDescription}>Explore a diverse range of travel packages tailored to every interest, from adventure to relaxation. Our trusted travel agencies offer options for every budget, helping you find the perfect trip with ease.</p>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.iconContainer}>
                            <Image src={Dollar} alt="slick-left" className={Styles.icon} />
                        </div>
                        <h2 className={Styles.cardHeading}>Direct Connection to Verified Travel Agencies</h2>
                        <p className={Styles.cardDescription}>Get connected instantly with vetted travel agencies for a seamless, personalized travel experience. Communicate directly with experts to plan your ideal vacation with confidence.</p>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.iconContainer}>
                            <Image src={Calendar} alt="slick-left" className={Styles.icon} />
                        </div>
                        <h2 className={Styles.cardHeading}>Roam Eazy Exclusive Deals and Discounts</h2>
                        <p className={Styles.cardDescription}>Unlock access to exclusive deals and discounts on select travel packages. Book now and save on your next adventure with our limited-time offers.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
