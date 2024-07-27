import { useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';
import styles from './TopPackages.module.css';
import { axiosInstance } from '@/utils/axios.utils';
import { IListing } from '@/inerfaces/IListing.interface';

const TopPackages = () => {

    const limit = 6;

    const [listings, setListings] = useState<IListing[]>([]);
    const [isListingLoading, setIsListingLoading] = useState(false);
    const [listingError, setListingError] = useState('');

    const fetchListings = async () => {
        try {
            const results = await axiosInstance.post('/api/listing', {
                offset: 0,
                limit,
                isFeatured: true,
                startDate: new Date().toISOString(),
                endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30).toISOString(), // featured in 30 days bracket
                // default active fetch
            });
            setListings(results.data.listings);
        } catch (err) {
            console.log(err);
            setListingError('Failed to fetch packages');
        } finally {
            setIsListingLoading(false);
        }
    }

    useEffect(() => {
        (async function () {
            await fetchListings();
        })();
    }, []);

    // mock data. use data from server for real testing
    const packages = [
        {
            title: "Package 1",
        },
        {
            title: "Package 2",
        },
        {
            title: "Package 3",
        },
        {
            title: "Package 4",
        },
        {
            title: "Package 5",
        },
        {
            title: "Package 6",
        },
    ]

    return <div className={styles.container}>
        <h2>Top Packages</h2>
        <div className={styles.cardsContainer}>
            {
                packages.map((item, index) => {
                    return <PackageCard title='Package 1' key={index} />
                })
            }
        </div>
    </div>
}

export default TopPackages;