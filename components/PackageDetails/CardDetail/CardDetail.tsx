'use client';
import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import Styles from "./CardDetail.module.css";
import Image from "next/image";
import locationicon from "../../../icons/locationicon.svg";
import nightIcon from "../../../assets/images/nights.svg";
import flight from "../../../assets/images/flight.svg";
import insurance from "../../../assets/images/Insurance.svg";
import hotel from "../../../assets/images/Hotel.svg";
import transportation from "../../../assets/images/Transportation.svg";
import { IListing } from '@/inerfaces/IListing.interface';
import { ICompany, ICompanyDetail } from '@/inerfaces/ICompany.interface';
import { Config } from '@/config/base.config';

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

interface ICardDetailProps {
    listing: IListing;
    company: ICompany & { details: ICompanyDetail };
}

export default function CardDetail(props: ICardDetailProps) {
    const { listing } = props;
    const [activeTab, setActiveTab] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index: any) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className={Styles.headingDiv}>
                <div className={Styles.heading}>
                    <h1>{listing.title}</h1>
                    <div className={Styles.locationiconDiv}>
                        <Image src={locationicon} alt="Location icon" layout="responsive" className={Styles.locationicon} />
                        <span>{listing.to?.toUpperCase()}</span>
                    </div>
                </div>
                <div className={Styles.heading}>
                    {listing.priceSingle && <h2>{listing.priceSingle}<span className={Styles.perPerson}> per person</span></h2>}
                    <h5>{listing.price}<span className={Styles.twinSharing}> Twin Sharing</span></h5>
                </div>
            </div>

            <div className={Styles.galleryContainer}>
                <Image src={`${Config.imageBaseUrl}?id=${listing.images[0]}`} alt="Main Cityscape" layout="responsive" width={100} height={100} className={Styles.mainImage} />
                {
                    listing.images.length > 1 && <div className={Styles.thumbnailContainer}>
                        {listing.images.slice(1).map((image, index) => (
                            <Image key={index} src={`${Config.imageBaseUrl}?id=${image}`} width={100} height={100} alt={`Thumbnail ${index + 1}`} layout="responsive" className={Styles.thumbnailimage} />
                        ))}
                    </div>
                }
            </div>

            <div className={Styles.featuresContainer}>
                {listing.numberOfNights && <div className={Styles.feature}>
                    <Image
                        src={nightIcon}
                        alt="card"
                    />
                    <span>{listing.numberOfNights} Nights</span>
                </div>}
                {listing.airTickets && <div className={Styles.feature}>
                    <Image
                        src={flight}
                        alt="card"
                    />
                    <span>Flight</span>
                </div>}
                {listing.travelInsurance && <div className={Styles.feature}>
                    <Image
                        src={insurance}
                        alt="card"
                    />
                    <span>Insurance</span>
                </div>}
                {listing.hotels?.length && <div className={Styles.feature}>
                    <Image
                        src={hotel}
                        alt="card"
                    />
                    <span>Hotel</span>
                </div>}
                {listing.airPortTransfers && <div className={Styles.feature}>
                    <Image
                        src={transportation}
                        alt="card"
                    />
                    <span>Transportation</span>
                </div>}
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
                {
                    listing.overview && <p>{listing.overview}</p>
                }
            </Element>

            <Element name="itinerary" className={Styles.section}>
                <h2>Itinerary</h2>
                <div className={Styles.tabs}>
                    <div className={Styles.tabHeaders}>
                        {
                            listing.itinerary.map((iti, index) => {
                                return (
                                    <button
                                        key={index}
                                        className={`${Styles.tabButton} ${activeTab === index ? Styles.active : ''}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        Day {iti.day}
                                    </button>
                                )
                            })
                        }
                    </div>
                    <div className={Styles.tabContent}>
                        {
                            listing.itinerary.map((iti, index) => {
                                return (
                                    <div key={index} className={Styles.tabPane}>
                                        <h3>{iti.title}</h3>
                                        <ul>
                                            {iti.description.map((desc, index) => (
                                                <li key={index}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Element>

            <Element name="inclusions" className={Styles.section}>
                <h2>Inclusions</h2>
                <ul>
                    {listing.mealsIncluded?.length && <li>Meals included: {listing.mealsIncluded.map((meal) => meal.toLowerCase()).join(", ")}.</li>}
                    {listing.travelInsurance && <li>Travel Insurance included in the package.</li>}
                    {listing.visa && <li>Visa to all destinations included.</li>}
                    {listing.hotels?.length && <li>Hotels included in {listing.hotels.map((hotel, index) => hotel.city.toLowerCase()).join(", ")}.</li>}
                    {listing.airTickets && <li>Air Tickets are included and will be sent to you.</li>}
                    {listing.tourGuide && <li>A tour guide will accompany you in your destination.</li>}
                    {listing.airPortTransfers && <li>
                        {
                            listing.airPortTransfers === "ARRIVAL_ONLY" ? "Airport Transfers are included for arrival only." : ""
                        }
                        {
                            listing.airPortTransfers === "DEPARTURE_ONLY" ? "Airport Transfers are included for departure only." : ""
                        }
                        {
                            listing.airPortTransfers === "TWO_WAY" ? "Airport Transfers are included for both arrival and departure." : ""
                        }
                    </li>}
                </ul>
            </Element>

            {
                !listing.mealsIncluded?.length || !listing.travelInsurance || !listing.visa || !listing.hotels?.length || !listing.airTickets || !listing.tourGuide || !listing.airPortTransfers &&
                <Element name="exclusions" className={Styles.section}>
                    <h2>Exclusions</h2>
                    <ul>
                        {!listing.visa && <li>Visa is not included in the package.</li>}
                        {!listing.airTickets && <li>Air Tickets are not included in the package.</li>}
                        {!listing.tourGuide && <li>A tour guide will not accompany you in your destination.</li>}
                        {!listing.travelInsurance && <li>Travel Insurance is not included in the package.</li>}
                        {!listing.airPortTransfers && <li>Airport Transfers are not included in the package.</li>}
                        {!listing.hotels?.length && <li>Hotels are not included in the package.</li>}
                        {!listing.mealsIncluded?.length && <li>Meals are not included in the package.</li>}
                    </ul>
                </Element>
            }

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
