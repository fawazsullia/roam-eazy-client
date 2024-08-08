import styles from './About.module.css';
import Image from "next/image";
import cappadocia from "../../assets/images/cappadocia.svg"
import pamukkale from "../../assets/images/pamukkale.svg"
import bosphorus from "../../assets/images/bosphorus.svg"
import { useRouter } from 'next/router';
export default function About() {
    const router = useRouter();
    const handleSeeAllClick = () => {
        console.log("Button clicked");
        router.push('/slug/listings?departure=someDeparture&destination=someDestination');
    }
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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s.</p>
                                <button className={styles.seeAllButton} onClick={handleSeeAllClick}>See all →</button>
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
