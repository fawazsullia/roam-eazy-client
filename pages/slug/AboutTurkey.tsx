'use client'
import Styles from "./AboutTukey.module.css"
import Shop from "../../icons/shop.svg"
import Dollar from '../../icons/dollar.svg';
import Calendar from '../../icons/calendar.svg'
import Image from "next/image";

export default function AboutTurkey() {
    return (
        <>
            <div className={Styles.container}>
                <h1 className={Styles.mainHeading}>About Turkey?</h1>
                <div className={Styles.cardsContainer}>
                    <div className={Styles.card}>
                        <div className={Styles.iconContainer}>
                            {/* Add your icon here, for example using Font Awesome or an image */}
                           
                            <Image src={Shop} alt="slick-left" className={Styles.icon} />
                        </div>
                        <h2 className={Styles.cardHeading}>Historical Sites</h2>
                        <p className={Styles.cardDescription}>Turkey is home to numerous ancient ruins and historical sites.
                             Istanbul, once Constantinople, boasts the iconic Hagia Sophia, Blue Mosque, and Topkapi Palace.
                              Ephesus showcases well-preserved Roman ruins, including the Library of Celsus and the Temple of Artemis,
                               one of the Seven Wonders of the Ancient World.</p>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.iconContainer}>
                        <Image src={Dollar} alt="slick-left" className={Styles.icon} />
                        </div>
                        <h2 className={Styles.cardHeading}>Natural Beauty</h2>
                        <p className={Styles.cardDescription}>From the otherworldly landscapes of Cappadocia with its 
                            fairy chimneys and hot air balloon rides to the stunning coastline along
                             the Mediterranean and Aegean Seas, Turkey offers diverse natural scenery. Pamukkale’s
                              travertine terraces and thermal pools are another natural wonder worth visiting.</p>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.iconContainer}>
                        <Image src={Calendar} alt="slick-left" className={Styles.icon} />
                        </div>
                        <h2 className={Styles.cardHeading}>Cultural Diversity</h2>
                        <p className={Styles.cardDescription}>Turkey's cultural mosaic is influenced by its history as
                             a crossroads between Europe and Asia. This is reflected in its cuisine, architecture, and traditions. 
                             Enjoy Turkish delights like kebabs, baklava, and Turkish tea in local markets (bazaars) or cafes (çay bahçesi).</p>
                    </div>
                </div>
            </div>
        </>
    );
}
