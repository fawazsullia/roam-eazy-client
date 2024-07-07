import CustomSlick from '../CustomSlick/CustomSlick';
import styles from './TopCountryRow.module.css';

const TopCountryRow = () => {

    const topCountries = [{
        title: 'India',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        id: 'india'
    },
    {
        title: 'United States',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        id: 'usa'
    },
    {
        title: 'United Kingdom',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        id: 'uk'
    },
    {
        title: 'Indonesia',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        id: 'indonesia'
    },];

    
    return (
        <div className={styles.mainContainer}>
            <CustomSlick cards={3} customComponents={topCountries}/>
        </div>
    );
}

export default TopCountryRow;