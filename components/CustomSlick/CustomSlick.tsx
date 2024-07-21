import React from "react";
import LeftArrowIcon from '../../icons/leftArrow.svg';
import RightArrowIcon from '../../icons/rightArrow.svg';
import Image from "next/image";
import styles from './CustomSlick.module.css';

interface IProps {
    cards: number;
    gap?: number;
    customComponents: {
        id: string;
        title: string;
        subText?: string;
        image?: string;
    }[]
}

const CustomSlick = (props: IProps) => {

    const { customComponents } = props;

    return <div className={styles.container}>
        <div>
            <Image src={LeftArrowIcon} alt="slick-left" />
        </div>
        {
            customComponents.map((component, index) => {
                return (

                    <div key={component.id} className={styles.countryCard} style={{ backgroundImage: `url(${component.image})`, backgroundSize: "cover" }}>
                        {/* <img width={300} height={300} src={country.image} alt={country.name} /> */}
                        <div className={styles.cardText}>
                            <h3>{component.title}</h3>
                            <p>{component.subText}</p>
                        </div>

                    </div>

                )
            })
        }
        <div>
            <Image src={RightArrowIcon} alt="slick-left" />
        </div>
    </div>
}

export default CustomSlick;