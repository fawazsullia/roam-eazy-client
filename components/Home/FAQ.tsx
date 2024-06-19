import { Collapse } from 'antd';
import styles from './Faq.module.css';

export default function FAQ() {

    const faqs = [
        { title: "What is RoamEazy?", content: "RoamEazy is a platform that connects travelers with local guides. We offer a wide range of tours and experiences that are curated by our local guides." },
        { title: "How do I book a tour?", content: "You can book a tour by visiting our website and selecting a tour that you are interested in. You can then select a date and time that works for you and complete the booking process." },
        { title: "How much does a tour cost?", content: "The cost of a tour varies depending on the tour that you choose. You can view the price of each tour on our website." },
        { title: "What is the cancellation policy?", content: "The cancellation policy varies depending on the tour that you choose. You can view the cancellation policy for each tour on our website." },
        { title: "How do I contact RoamEazy?", content: "You can contact RoamEazy by sending an email to" },
        { title: "How do I become a local guide?", content: "If you are interested in becoming a local guide, you can apply on our website. We are always looking for passionate individuals who are knowledgeable about their city and can provide an authentic experience for travelers." }
    ]

    const getContent = () => {
        const content = faqs.map((faq, index) => {
          return {
            key: index,
            label: faq.title,
            children: faq.content,
          }
        });
        return content;
      }

    return (
        <div>
            <div className={styles.faqContainer}>
                <h4>Frequently Asked Questions:</h4>
                {
                    <Collapse items={getContent()} />
                }
            </div>
        </div>
    );
}

