'use client';
import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import Styles from "./CardDetail.module.css";
import Image from "next/image";
import galleryimage1 from "../../../assets/images/gallery1.jpg";
import galleryimage2 from "../../../assets/images/gallery2.jpg";
import galleryimage3 from "../../../assets/images/gallery3.jpg";
import galleryimage4 from "../../../assets/images/gallery4.jpg";
import galleryimage5 from "../../../assets/images/gallery5.jpg";
import galleryimage6 from "../../../assets/images/gallery6.jpg";
import locationicon from "../../../icons/locationicon.svg";
import nightIcon from "../../../assets/images/nights.svg";
import flight from "../../../assets/images/flight.svg";
import insurance from "../../../assets/images/Insurance.svg";
import hotel from "../../../assets/images/Hotel.svg";
import transportation from "../../../assets/images/Transportation.svg";
import person from "../../../assets/images/persons.svg";
import meals from "../../../assets/images/meals.svg";
import airport from "../../../assets/images/airport.svg";
import visa from "../../../assets/images/visa.svg";

const FAQItem = ({ question, answers, isOpen, onClick }: { question: any; answers: any; isOpen: any; onClick: any }) => {
    return (
        <div className={Styles.faqItem}>
            <div className={Styles.faqQuestion} onClick={onClick}>
                <span className={`${Styles.text} ${isOpen ? Styles.openText : Styles.closedText}`}>{question}</span>
            </div>
            {isOpen && (
                <div className={Styles.faqAnswer}>
                    <ul>
                        {answers.map((answer: any, index: any) => (
                            <li key={index}>{answer}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const FAQ = ({ faqs }: { faqs: any }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleFAQClick = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={Styles.faqContainer}>
            {faqs.map((faq: any, index: any) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answers={faq.answers}
                    isOpen={openIndex === index}
                    onClick={() => handleFAQClick(index)}
                />
            ))}
        </div>
    );
};

export default function CardDetail() {
    const [mainImage, setMainImage] = useState(galleryimage1);
    const [activeTab, setActiveTab] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0); 
    const handleThumbnailClick = (image: any) => {
        setMainImage(image);
    };

    const handleTabClick = (index: any) => {
        setActiveTab(index);
    };

    const faqsTab1 = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.11111',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },
    ];

    const faqsTab2 = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.22222',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },
    ];

    const faqsTab3 = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.33333',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },
    ];

    const faqsTab4 = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.44444',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            answers: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.']
        },
    ];

    return (
        <>
            <div className={Styles.headingDiv}>
                <div className={Styles.heading}>
                    <h1>Georgia Holiday Package</h1>
                    <div className={Styles.locationiconDiv}>
                        <Image src={locationicon} alt="Location icon" layout="responsive" className={Styles.locationicon} />
                        <span> Tbilisi, Georgia</span>
                    </div>
                </div>
                <div className={Styles.heading}>
                    <h2>AED 2750/-<span className={Styles.perPerson}> per person</span></h2>
                    <h5>AED 5000/-<span className={Styles.twinSharing}> Twin Sharing</span></h5>
                </div>
            </div>

            <div className={Styles.galleryContainer}>
                <Image src={mainImage} alt="Main Cityscape" layout="responsive" className={Styles.mainImage} />
                <div className={Styles.thumbnailContainer}>
                    {[galleryimage2, galleryimage3, galleryimage4, galleryimage5, galleryimage6].map((image, index) => (
                        <Image key={index} src={image} alt={`Thumbnail ${index + 1}`} layout="responsive" className={Styles.thumbnailimage} onClick={() => handleThumbnailClick(image)} />
                    ))}
                </div>
            </div>

            <div className={Styles.featuresContainer}>
                {[
                    { icon: nightIcon, label: "3 Nights" },
                    { icon: meals, label: "Meals" },
                    { icon: airport, label: "Airport Transfers" },
                    { icon: hotel, label: "Hotel" },
                    { icon: flight, label: "Flight" },
                    { icon: insurance, label: "Insurance" },
                    { icon: transportation, label: "City Tour" },
                    { icon: person, label: "Minimum Persons" },
                    { icon: visa, label: "Visa" },
                ].map((feature, index) => (
                    <div key={index} className={Styles.feature}>
                        <Image src={feature.icon} alt={feature.label} />
                        <span>{feature.label}</span>
                    </div>
                ))}
            </div>

            <nav className={Styles.navbar}>
            {["overview", "itinerary", "inclusions", "exclusions", "terms"].map((section, index) => (
                <Link
                    key={index}
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-80} 
                    className={index === activeIndex ? Styles.active : ''}
                    onClick={() => setActiveIndex(index)}
                >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
            ))}
        </nav>

            <Element name="overview" className={Styles.section}>
                <h2>Overview</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
                <p>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh.</p>
            </Element>

            <Element name="itinerary" className={Styles.section}>
                <h2>Itinerary</h2>
                           <div className={Styles.tabs}>
                    <div className={Styles.tabHeaders}>
                        {['Day 1', 'Day 2', 'Day 3', 'Day 4'].map((tab, index) => (
                            <button
                                key={index}
                                className={`${Styles.tabButton} ${activeTab === index ? Styles.active : ''}`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className={Styles.tabContent}>
                        {activeTab === 0 && (
                            <div className={Styles.tabPane}>
                                <FAQ faqs={faqsTab1} />
                            </div>
                        )}
                        {activeTab === 1 && (
                            <div className={Styles.tabPane}>
                                <FAQ faqs={faqsTab2} />
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div className={Styles.tabPane}>
                                <FAQ faqs={faqsTab3} />
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div className={Styles.tabPane}>
                                <FAQ faqs={faqsTab4} />
                            </div>
                        )}
                    </div>
                </div>
            </Element>

            <Element name="inclusions" className={Styles.section}>
                <h2>Inclusions</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</li>
                </ul>
            </Element>

            <Element name="exclusions" className={Styles.section}>
                <h2>Exclusions</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</li>
                </ul>
            </Element>

            <Element name="terms" className={Styles.section}>
                <h2>Terms & Conditions</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </Element>
        </>
    );
}
