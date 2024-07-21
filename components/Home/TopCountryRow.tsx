import CustomSlick from '../CustomSlick/CustomSlick';
import styles from './TopCountryRow.module.css';

const TopCountryRow = () => {

    const topCountries = [{
        title: 'India',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        id: 'india',
        subText: "343 packages"
    },
    {
        title: 'United States',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        id: 'usa',
        subText: "343 packages"
    },
    {
        title: 'United Kingdom',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        id: 'uk',
        subText: "343 packages"
    },
    {
        title: 'Indonesia',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        id: 'indonesia',
        subText: "343 packages"
    },];

    
    return (
        <div className={styles.mainContainer}>
            <h2>Top Countries</h2>
            <CustomSlick cards={3} customComponents={topCountries}/>
        </div>
    );
}

export default TopCountryRow;