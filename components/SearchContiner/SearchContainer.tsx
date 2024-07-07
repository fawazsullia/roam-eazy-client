import { Button, Col, DatePicker, Form, Select } from 'antd';
import styles from './SearchContainer.module.css';

const { RangePicker } = DatePicker;

const SearchContainer = () => {

    const mockOptions = [{
        value: 'dubai',
        label: 'Dubai'
    },
    
    {
        value: 'paris',
        label: 'Paris'
    },
    
    {
        value: 'london',
        label: 'London'
    },

    {
        value: 'newyork',
        label: 'New York'
    }]

    return (
        <div className={styles.searchContainer}>
            <h1>Explore beautiful places in the world with Roameazy </h1>
            <Form layout='inline' className={styles.form}>
                <div className={styles.formComponents}>
                    <div className={styles.formComponent}>
                        <Select placeholder='Departure From' className={styles.input} options={mockOptions} showSearch filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }/>
                    </div>
                    <div className={styles.formComponent}>
                        <Select placeholder='Arrive To' className={styles.input} options={mockOptions} showSearch filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }/>
                    </div>
                    <div className={styles.formComponent}>
                        <RangePicker width={4} placeholder={["Start Date", "End Date"]} className={styles.input} format='DD/MM/YYYY' />
                    </div>
                    <div className={styles.formComponent}>
                        <Button className={styles.searchBtn}>Let's Go</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
};


export default SearchContainer;