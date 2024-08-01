import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './ClientContainer.module.css';

interface IClientContainerProps {
    children: React.ReactNode;

}

const ClientContainer: React.FC<IClientContainerProps> = ({ children } ) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div>
            <header className={styles.headerContainer}>
            <nav className={styles.navbar}> 
                <div  className={styles.mobilelogo}>
                 <div className={styles.hamburger} onClick={toggleMobileMenu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.logo}>ROAMEAZY</div>
            </div>
            <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
            <li><a href="/" className={router.pathname === '/' ? styles.active : ''}>Home</a></li>
                <li><a href="/about" className={router.pathname === '/about' ? styles.active : ''}>About Us</a></li>
                <li><a href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>Contact Us</a></li>
                <li><a href="/signup" className={styles.signUp}>Sign Up</a></li>
            </ul>
            <a href="/signup"  className={`${styles.signUp} ${styles.mobile}`}>Sign Up</a>
        </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                {/* Your footer content goes here */}
            </footer>
        </div>
    );
};

export default ClientContainer;