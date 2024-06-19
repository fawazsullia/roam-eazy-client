import React from 'react';
import styles from './ClientContainer.module.css';

interface IClientContainerProps {
    children: React.ReactNode;

}

const ClientContainer: React.FC<IClientContainerProps> = ({ children } ) => {
    return (
        <div>
            <header className={styles.headerContainer}>
                <div>
                    <h1>RoamEazy</h1>
                </div>
                <div className={styles.menuContainer}>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
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