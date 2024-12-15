import React from 'react';
import Styles from './ContentWrapper.module.css';

interface ContentWrapperProps {
}

const ContentWrapper: React.FC<ContentWrapperProps> = () => {

    const content = [
        {
            title: '',
            content: "At Roameazy, we are committed to making your travel dreams come true. Roameazy.com is designed to bring you the best tour packages from the UAE from different travel companies. Whether you're planning a relaxing holiday, an adventurous getaway, Roameazy is your one-stop destination for an extensive collection of holiday packages from UAE with competitive pricing across multiple travel providers. We provide seamless comparison of holiday and tour packages from UAE through verified and trusted travel partners."
        },
    ]

    return <>
        <div className={Styles.container}>
            <div className={Styles.cardsContainer}>
                {
                    content.map((item, index) => {
                        return (
                            <div className={Styles.card}>
                                {item.title && <h2 className={Styles.cardHeading}>{item.title}</h2>}
                                {item.content && <p className={Styles.cardDescription}>{item.content}</p>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
};

export default ContentWrapper;