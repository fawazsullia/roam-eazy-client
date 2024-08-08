'use client'
import styles from "./LogoipsumCard.module.css";
import Image from "next/image";
import logoipsum from "../../../icons/logoipsum.svg"
import call from "../../../icons/callicon.svg"
import whatsapp from "../../../icons/whatsappicon.svg"
export default function LogoipsumCard() {
    return (
        <div className={styles.searchContainer}>
            <div className={styles.logo}>
                <Image src={logoipsum} alt="Logoipsum" className={styles.image} /><h4>Logoipsum</h4>
            </div>
            <div className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.callButton}>  <Image src={call} alt="Logoipsum" className={styles.image} />
                    <a href="tel:+123456789" className={styles.button} >Call</a>
                </div>
                <div className={styles.whatsappButton}>  <Image src={whatsapp} alt="Logoipsum" className={styles.image} />
                    <a href="https://wa.me/123456789" className={styles.button}>Whatsapp</a>
                </div>
            </div>
        </div>
    );
}
