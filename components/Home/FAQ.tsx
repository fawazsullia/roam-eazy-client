import { useState } from 'react';
import styles from './Faq.module.css';
import Image from "next/image";
import Plus from "../../icons/Plus.svg";
import Minus from "../../icons/Minus.svg";
import Question from "../../icons/Question.svg";
interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={onClick}>
                <span className={styles.icon}>
                    <Image src={Question} alt="Question icon" />
                </span>
                <span className={styles.text}>{question}</span>
                <span className={styles.toggleIcon}>
                    {isOpen ? <Image src={Minus} alt="Collapse icon" className={styles.image} />
                        : <Image src={Plus} alt="Expand icon" className={styles.image} />}
                </span>
            </div>
            {isOpen && <div className={styles.faqAnswer}><p>{answer}</p></div>}
        </div>
    );
};

const FAQ = (props: { faq?: { question: string; answer: string }[] }) => {
    const [openIndex, setOpenIndex] = useState<number>(-1);
    if (!props.faq) return <></>
    const { faq } = props;

    const handleFAQClick = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(-1); return
        };
        setOpenIndex(index);
    };


    return (
        <div className={styles.container}>
            <div className={styles.faqContainer}>
                <h1>FAQs</h1>
                {faq?.map((faq, index) => (
                    <div key={index} className={styles.test}>
                        <FAQItem
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleFAQClick(index)}
                        />
                    </div>
                ))}
                {/* <a href="/slug/listings?departure=someDeparture&destination=someDestination">
                    <button className={styles.seeAllButton}>See all →</button></a> */}
            </div>
        </div>
    );
};

export default FAQ;
