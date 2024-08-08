import { useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';
import styles from './SimilarPackages.module.css';
import { axiosInstance } from '@/utils/axios.utils';
import { IListing } from '@/interfaces/IListing.interface';
import pkg1 from "../../assets/images/pkg1.jpg"
import pkg2 from "../../assets/images/pkg2.jpg"
import pkg3 from "../../assets/images/pkg3.jpg"
import pkg4 from "../../assets/images/pkg4.jpg"
import pkg5 from "../../assets/images/pkg5.jpg"
import pkg6 from "../../assets/images/pkg6.jpg"
import night from "../../assets/images/nights.svg"
import flight from "../../assets/images/flight.svg"
import insurance from "../../assets/images/Insurance.svg"
import hotel from "../../assets/images/Hotel.svg"
import transportation from "../../assets/images/Transportation.svg"
const SimilarPackages = () => {
    const defaultLimit = 6;
    const [limit, setLimit] = useState<number>(defaultLimit);
    const [listings, setListings] = useState<IListing[]>([]);
    const [isListingLoading, setIsListingLoading] = useState(false);
    const [listingError, setListingError] = useState('');

    const fetchListings = async () => {
        setIsListingLoading(true);
        try {
            const results = await axiosInstance.post('/api/listing/get-listings', {
                offset: 0,
                limit,
                isFeatured: true,
                startDate: new Date().toISOString(),
                endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30).toISOString(), // featured in 30 days bracket
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
        const updateLimit = () => {
            if (window.innerWidth < 559) {
                setLimit(1);
            } else if (window.innerWidth < 999) {
                setLimit(2);
            } else {
                setLimit(defaultLimit);
            }
        };

        updateLimit();
        window.addEventListener('resize', updateLimit);

        return () => {
            window.removeEventListener('resize', updateLimit);
        };
    }, []);

    useEffect(() => {
        (async function () {
            await fetchListings();
        })();
    }, [limit]);

    // mock data. use data from server for real testing
    const packages = [
        {
            id: 7,
            title: "Turkey Holiday Package",
            price: "AED 1999/-",
            details: [{ name: '5 Nights', icon: night },
            { name: 'Flight', icon: flight },
            { name: 'Insurance', icon: insurance },
            { name: 'Hotel', icon: hotel },
            { name: 'Transportation', icon: transportation },],
            verified: true,
            image1: pkg1,
            image2: pkg2,
            image3: pkg3,
        },
        {
            id: 8,
            title: "Seville Holiday Package",
            price: "AED 1999/-",
            details: [{ name: '5 Nights', icon: night },
            { name: 'Flight', icon: flight },
            { name: 'Insurance', icon: insurance },
            { name: 'Hotel', icon: hotel },
            { name: 'Transportation', icon: transportation },],
            verified: true,
            image1: pkg2,
            image2: pkg3,
            image3: pkg4,
        },
        {
            id: 9,
            title: "Sydney Holiday Package",
            price: "AED 1999/-",
            details: [{ name: '5 Nights', icon: night },
            { name: 'Flight', icon: flight },
            { name: 'Insurance', icon: insurance },
            { name: 'Hotel', icon: hotel },
            { name: 'Transportation', icon: transportation },],
            verified: true,
            image1: pkg3,
            image2: pkg4,
            image3: pkg5,
        },
        
    ];

    return (
        <div className={styles.container}>
            <h2>Similar Packages</h2>
            <div className={styles.cardsContainer}>
                {
                    packages.slice(0, limit).map((item, index) => (
                        <PackageCard
                            id={item.id}
                            image1={item.image1}
                            image2={item.image2}
                            image3={item.image3}
                            title={item.title}
                            price={item.price}
                            details={item.details}
                            verified={item.verified}
                            key={index}
                        />
                    ))
                }

            </div>
          
        </div>
    );
}

export default SimilarPackages;
