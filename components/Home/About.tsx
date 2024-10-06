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
                    <h1>explore Turkey</h1>
                </div>
                <div className={styles.aboutComponent}>
                    <div className={styles.aboutSecondDiv}>
                        <div className={styles.aboutSides}>
                            <p>Uncover the beauty of Turkey, from the stunning landscapes of Cappadocia to the ancient ruins of Ephesus. Indulge in delicious cuisine and vibrant culture while exploring picturesque cities and breathtaking coastlines.

                                With our curated travel packages, planning your dream trip has never been easier. Book now and embark on an unforgettable adventure in Turkey!</p>
                            <a href={generateListingLink('uae', 'turkey')} target='_blank'>
                                <button className={styles.seeAllButton}>See all →</button></a>
                        </div>
                        <div className={styles.aboutSides}>
                            <div className={styles.imageDiv}>
                                <div className={styles.imagecard}>
                                    <Image src={cappadocia} alt="Cappadocia" className={styles.image} />
                                    <h2>Cappadocia</h2>
                                </div>
                                <div className={styles.imagecard}>
                                    <Image src={pamukkale} alt="Pamukkale" className={styles.image} />
                                    <h2>Pamukkale</h2>
                                </div>
                                <div className={styles.imagecard}>
                                    <Image src={bosphorus} alt="Bosphorus" className={styles.image} />
                                    <h2>Bosphorus</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
