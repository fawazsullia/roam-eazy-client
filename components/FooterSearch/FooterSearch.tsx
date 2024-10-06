import { Button, Form, Input, message } from 'antd';
import styles from './Footersearch.module.css';
import { axiosInstance } from '@/utils/axios.utils';

const FooterSearch = () => {

    const [form] = Form.useForm();


    const handleFormSubmission = async () => {
        try {
            const values = form.getFieldsValue();
            const response = await axiosInstance.post('/api/form-submission/join-us-as-travel-agency', values);
            message.success('Form submitted successfully');
            form.resetFields();
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
            message.error('Failed to submit form');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h1>Join us as Travel Agency</h1>
                <p>If you are a travel agency then join us here by entering your email address.</p>
                <Form layout='inline' className={styles.form} form={form}>
                    <div className={styles.formComponents}>
                        <div className={styles.formComponent}>
                            <Form.Item
                                name={'email'}
                                required={true}
                            ><Input
                                    placeholder="Email Address"
                                    className={styles.input}
                                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                                /></Form.Item>
                        </div>
                        <div className={styles.formComponent}>
                            <Form.Item
                                name={'companyName'}
                                required={true}
                            ><Input
                                    placeholder="Company Name"
                                    className={styles.input}
                                /></Form.Item>
                        </div>
                        <div className={styles.formComponent}>
                            <Form.Item
                                name={'contactNumber'}
                                required={true}
                            ><Input
                                    placeholder="Contact Number (0504177289)"
                                    className={styles.input}
                                    pattern='[0-9]{10}'
                                /></Form.Item>
                        </div>
                        <div className={styles.formComponent}>
                            <Button className={styles.joinBtn} onClick={handleFormSubmission}>Join</Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default FooterSearch;
