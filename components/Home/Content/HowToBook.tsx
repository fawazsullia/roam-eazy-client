import { Timeline } from 'antd';
import styles from './HowToBook.module.css';

const HowToBook = (props: any) => {
    const { howTo } = props;
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>{howTo.heading}</h2>
            <ol className={styles.list}>
                {
                    howTo.list.map((item: any) => (
                        <li key={item} className={styles.listItem}>{item}</li>
                    ))
                }
            </ol>
        </div>
    );
};

export default HowToBook;