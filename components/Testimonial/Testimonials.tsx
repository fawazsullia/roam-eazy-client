// components/CustomSlick.js
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from './Testimonials.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const testimonials = [
        {
            image: avatar1,
            name: "John Doe",
            role: "Traveler",
            rating: 5,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },
        {
            image: avatar2,
            name: "Olivia Rograt",
            role: "Traveler",
            rating: 5,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },
        {
            image: avatar3,
            name: "Julia Smith",
            role: "Traveler",
            rating: 5,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },
        {
            image: avatar3,
            name: "Julia Smith",
            role: "Traveler",
            rating: 5,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },
        {
            image: avatar3,
            name: "Julia Smith",
            role: "Traveler",
            rating: 5,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.sliderdiv}>
                <div className={styles.heading}>
                    <h1>Testimonials</h1>
                </div>
                <Slider {...settings} className={styles.slider}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles['card-container']}>
                            <div className={styles.card}>

                                <Image src={testimonial.image} alt={testimonial.name} className={styles.image} />

                                <div className={styles.textContainer}>
                                    <div className={styles.flexDiv}> 
                                        <div>
                                            <h2 className={styles.title}>{testimonial.name}</h2>
                                            <p className={styles.role}>{testimonial.role}</p>
                                        </div>
                                        <p className={styles.rating}>{"★".repeat(testimonial.rating)}</p>
                                    </div>
                                    <p className={styles.description}>{testimonial.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
