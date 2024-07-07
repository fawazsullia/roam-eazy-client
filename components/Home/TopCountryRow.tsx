import styles from './TopCountryRow.module.css';

const TopCountryRow = () => {
    const topCountries = [{
        name: 'India',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        countryId: 'india'
    },
    {
        name: 'United States',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        countryId: 'usa'
    },
    {
        name: 'United Kingdom',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        countryId: 'uk'
    },
    {
        name: 'Indonesia',
        image: 'https://assets.gqindia.com/photos/62f9c75e0d4e31701fb885d6/16:9/w_1920,c_limit/Lesser-known-facts-about-India.jpeg',
        countryId: 'indonesia'
    },]
    return (
        <div className={styles.mainContainer}>
            <h2>Top Countries</h2>
            <div className={styles.container}>
                {
                    topCountries.map((country, index) => (
                        <div key={index} className={styles.countryCard} style={{ backgroundImage: `url(${country.image})`, backgroundSize: "cover" }}>
                            {/* <img width={300} height={300} src={country.image} alt={country.name} /> */}
                            <h3>{country.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TopCountryRow;