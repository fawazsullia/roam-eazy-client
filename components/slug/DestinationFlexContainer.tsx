import Styles from "./DestinationFlexContainer.module.css";

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
                <div className={Styles.cardsContainer}>
                    {
                        content.map((item, index) => {
                            return (
                                <div className={Styles.card}>
                                    { item.title && <h2 className={Styles.cardHeading}>{item.title}</h2>}
                                    { item.content && <p className={Styles.cardDescription}>{item.content}</p>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
