import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './ClientContainer.module.css';
import Image from "next/image";
import facebook from "../../icons/facebook.svg"
import x from "../../icons/x.svg"
import instagram from "../../icons/instagram.svg"
import location from "../../assets/images/location.png"

interface IClientContainerProps {
    children: React.ReactNode;

}

const ClientContainer: React.FC<IClientContainerProps> = ({ children }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div>
            <header className={styles.headerContainer}>
                <nav className={styles.navbar}>
                    <div className={styles.mobilelogo}>
                        <div className={styles.hamburger} onClick={toggleMobileMenu}>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.logo}><a href='/' style={{ textDecoration: "none", color: "black" }}>ROAMEAZY</a></div>
                    </div>
                    <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
                        <li><a href="/" className={router.pathname === '/' ? styles.active : ''}>Home</a></li>
                        <li><a href="/about" className={router.pathname === '/about' ? styles.active : ''}>About Us</a></li>
                        <li><a href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>Contact Us</a></li>
                        {/* <li><a href="/signup" className={styles.signUp}>Sign Up</a></li> */}
                    </ul>
                    {/* <a href="/signup" className={`${styles.signUp} ${styles.mobile}`}>Sign Up</a> */}
                </nav>
            </header>

            
            <main>
                {children}
            </main>


            <footer>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <div className={styles.leftDiv}>

                            <div className={styles.leftinnerDiv}>
                                <div className={styles.inner}>
                                    <h1 className={styles.logo}>ROAMEAZY</h1>
                                    <p className={styles.innerp}>Explore the World, One Package at a Time.</p>
                                    <h2 className={styles.h2heading}>Social</h2>
                                    <div>
                                        <span>
                                            <Image src={facebook} alt="slick-left" className={styles.socialicon} />
                                        </span>
                                        <span>
                                            <Image src={x} alt="slick-left" className={styles.socialicon} />
                                        </span>
                                        <span>
                                            <Image src={instagram} alt="slick-left" className={styles.socialicon} />
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.inner}>
                                    <h2 className={styles.h2heading}>Quick Links</h2>
                                    <ul className={styles.innerul}>
                                        <li>About us</li>
                                        <li>Contact Us</li>
                                        <li>Popular Locations</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className={styles.rightDiv}>
                            <h2 className={styles.h2heading}>Contact</h2>
                            <div className={styles.information}>Email: hello@roameazy.com</div>
                            <div className={styles.information}>Contact: +971512345678</div>
                            <div className={styles.information}>Address: office 123, Street ABCDEF, Emirate, UAE</div>
                            <div className={styles.locationimageOut}>
                                <Image src={location} alt="slick-left" className={styles.locationimage} />
                            </div>
                        </div>
                    </main>
                    <div className={styles.copyright}>
                        <p>@Copyright RoamEazy 2024</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ClientContainer;