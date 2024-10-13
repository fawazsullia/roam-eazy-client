import Styles from "./AboutTukey.module.css"
import Shop from "../../icons/shop.svg"
import Dollar from '../../icons/dollar.svg';
import Calendar from '../../icons/calendar.svg'
import Image from "next/image";

interface IProps {
    content: {
        title: string,
        content: string
    }[]
}

export default function DestinationFlexContentContainer(props: IProps) {
    const { content } = props;


    return (
        <>
            <div className={Styles.container}>
                <h1 className={Styles.mainHeading}>About Turkey?</h1>
                <div className={Styles.cardsContainer}>
                    {
                        content.map((item, index) => {
                            return (
                                <div className={Styles.card}>
                                    {/* <div className={Styles.iconContainer}>
                                        <Image src={Shop} alt="slick-left" className={Styles.icon} />
                                    </div> */}
                                    <h2 className={Styles.cardHeading}>{item.title}</h2>
                                    <p className={Styles.cardDescription}>{item.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
