import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios.utils';
import ClientContainer from '@/components/ClientContainer/ClientContainer';
import Subscribe from '@/components/Home/Subscribe/Subscribe';
import HeroDetails from '@/components/PackageDetails/HeroDetails';
import SimilarPackages from '@/components/PackageDetails/SimilarPackages';
import styles from './[id].module.css';
import CardDetail from '@/components/PackageDetails/CardDetail/CardDetail';
import Logoipsumcard from '@/components/PackageDetails/CardDetail/LogoipsumCard';

const PackageDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [packageDetails, setPackageDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPackageDetails = async () => {
            try {
                const result = await axiosInstance.get(`/api/listing/get-package/${id}`);
                setPackageDetails(result.data);
            } catch (err) {
                console.log(err);
                setError('Failed to fetch package details');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPackageDetails();
        }
    }, [id]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;

    return (
        <div >
            <ClientContainer>
                <HeroDetails />

                <div className={styles.container}>
                    <div className={styles.cardDetailDiv}>
                        <div className={styles.cardDetail}>
                            <CardDetail/>
                        </div>
                        <div className={styles.cardDetail}>
                            <Logoipsumcard/>
                        </div>
                    </div>
                </div>

                <SimilarPackages />
                <Subscribe />
            </ClientContainer>

        </div>
    );
};

export default PackageDetails;
