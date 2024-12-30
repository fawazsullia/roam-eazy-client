import styles from './About.module.css';
import Image from "next/image";
import cappadocia from "../../assets/images/cappadocia.svg"
import pamukkale from "../../assets/images/pamukkale.svg"
import bosphorus from "../../assets/images/bosphorus.svg"
import { generateListingLink } from '@/utils/link-generation.utils';

export default function About() {

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.overlay}></div>
                <div className={styles.aboutFirstDiv}>
                    <h2>Discover the Best Tours and Travel Packages from UAE</h2>
                </div>
                <div className={styles.aboutComponent}>
                    <div className={styles.aboutSecondDiv}>
                        <div className={styles.aboutSides}>
                            <p>At Roameazy.com, we are committed to making your travel dreams come true. Roameazy.com is designed to bring you the best tour packages from the UAE from a variety of trusted travel companies.. Whether you're planning a relaxing holiday, an adventurous getaway, or a business trip, Roameazy.com is your one-stop destination for finding and comparing amazing deals tailored to your needs.</p>
                            <a href={generateListingLink('uae', 'turkey')} target='_blank'>
                                <button className={styles.seeAllButton}>See all →</button></a>
                        </div>
                        <div className={styles.aboutSides}>
                            <div className={styles.imageDiv}>
                                <div className={styles.imagecard}>
                                    <Image src={cappadocia} alt="Cappadocia" className={styles.image} />
                                    <h2>Armenia</h2>
                                </div>
                                <div className={styles.imagecard}>
                                    <Image src={pamukkale} alt="Pamukkale" className={styles.image} />
                                    <h2>Bali</h2>
                                </div>
                                <div className={styles.imagecard}>
                                    <Image src={bosphorus} alt="Bosphorus" className={styles.image} />
                                    <h2>London</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
