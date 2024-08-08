import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PackageDetail.module.css';

const PackageDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [packageDetail, setPackageDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            const fetchPackageDetail = async () => {
                setIsLoading(true);
                try {
                    const response = await axios.get(`/api/package/${id}`);
                    setPackageDetail(response.data);
                } catch (err) {
                    setError('Failed to fetch package details');
                } finally {
                    setIsLoading(false);
                }
            };

            fetchPackageDetail();
        }
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!packageDetail) {
        return <div>No package found</div>;
    }

    return (
        <div className={styles.container}>
            <h1>{packageDetail.title}</h1>
            <div className={styles.images}>
                <img src={packageDetail.image1} alt={packageDetail.title} className={styles.image} />
                <img src={packageDetail.image2} alt={packageDetail.title} className={styles.image} />
                <img src={packageDetail.image3} alt={packageDetail.title} className={styles.image} />
            </div>
            <h2>Price: {packageDetail.price}</h2>
            <h3>Includes:</h3>
            <ul>
                {packageDetail.details.map((detail, index) => (
                    <li key={index}>
                        <img src={detail.icon} alt={detail.name} className={styles.icon} />
                        {detail.name}
                    </li>
                ))}
            </ul>
            <div className={styles.verified}>
                {packageDetail.verified ? 'Verified' : 'Not Verified'}
            </div>
        </div>
    );
};

export default PackageDetail;
