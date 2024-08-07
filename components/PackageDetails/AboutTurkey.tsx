'use client'
import Styles from "./AboutTurkey.module.css"
import Shop from "../../../icons/shop.svg"
import Dollar from '../../../icons/dollar.svg';
import Calendar from '../../../icons/calendar.svg'
import Image from "next/image";

export default function AboutTurkey() {
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
                        <h2 className={Styles.cardHeading}>Dynamic Marketplace</h2>
                        <p className={Styles.cardDescription}>RoamEazy serves as a dynamic marketplace
                             where multiple travel and tourism companies converge to showcase their enticing holiday pakages. 
                             This platform offers travels a one-stop destination to explore an array of options,
                             friom exotic gateways to adventurous expeditions, all curated by reputable companies in the industry.</p>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.iconContainer}>
                        <Image src={Dollar} alt="slick-left" className={Styles.icon} />
                        </div>
                        <h2 className={Styles.cardHeading}>Competitive Prices</h2>
                        <p className={Styles.cardDescription}>With RoamEazy, travelers can effortlessly 
                            compare and book holiday packages tailored to their preferences and budget. 
                            Whether cravings a serence beach retreat, a thrilling safari adventure, 
                            or a cultural immersion in bustling cities, the diverse offerings cater to every wanderlust.</p>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.iconContainer}>
                        <Image src={Calendar} alt="slick-left" className={Styles.icon} />
                        </div>
                        <h2 className={Styles.cardHeading}>Seamless Booking</h2>
                        <p className={Styles.cardDescription}>Through RoamEazy, travelers enjoy the convenience of browsing 
                            through various holiday packages, complte with detaled itineraries and transparent pricing.
                             with a seamless booking process and trusted partners, RoamEazy ensures that every journey is as smooth and
                             memorable as possible, promising unforgettable travel experiences at the click of a button.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
