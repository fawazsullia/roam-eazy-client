import { Button, Col, Form, Input } from 'antd';
import styles from './Footersearch.module.css';

const FooterSearch = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h1>Join us as Travel Agency</h1>
                <p>If you are a travel agency then join us here by entering your email address.</p>
                <Form layout='inline' className={styles.form}>
                    <div className={styles.formComponents}>
                        <div className={styles.formComponent}>
                            <Input
                                placeholder="Email Address"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formComponent}>
                            <Input
                                placeholder="Company Name"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formComponent}>
                            <Input
                                placeholder="Contact Number"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.formComponent}>
                            <Button className={styles.joinBtn}>Join</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default FooterSearch;
