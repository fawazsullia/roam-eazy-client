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

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const faqs = [
        {
            question: 'What is RoamEazy.com?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        },
        {
            question: 'How does RoamEazy.com work?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        },
        {
            question: 'Is RoamEazy.com free to use?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        },
        {
            question: 'Is RoamEazy.com free to use?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        },
        {
            question: 'Is RoamEazy.com free to use?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        },
        // Add more FAQs as needed
    ];

    const handleFAQClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.faqContainer}>
                <h1>FAQs</h1>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.test}>
                        <FAQItem
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleFAQClick(index)}
                        />
                    </div>
                ))}
                <button  className={styles.seeAllButton}>See all →</button>
            </div>
        </div>
    );
};

export default FAQ;
