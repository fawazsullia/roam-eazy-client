import { useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';
import styles from './TopPackages.module.css';
import { axiosInstance } from '@/utils/axios.utils';
import { IListing } from '@/inerfaces/IListing.interface';
import { Spin } from 'antd';

interface ITopPackagesProps {
    isPage?: boolean;
}

const TopPackages = (props: ITopPackagesProps) => {
    const { isPage } = props;
    const isPageLimit = 12;
    const defaultLimit = isPage ? isPageLimit : 6;
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
                isTopPackage: true,
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
                setLimit(isPage ? isPageLimit : 3);
            } else if (window.innerWidth < 900) {
                setLimit(isPage ? isPageLimit : 4);
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

    return (
        <div className={styles.container}>
            <h2>Top Tour Packages</h2>
            {
                isListingLoading ? <div><Spin /></div> : (<div className={styles.cardsContainer}>
                    {
                        listings.slice(0, limit).map((item, index) => (
                            <PackageCard
                                id={item.listingId}
                                key={item.listingId}
                                title={item.title}
                                price={item.price}
                                verified={item.isVerified}
                                travelInsurance={item.travelInsurance}
                                hotels={item.hotels}
                                airPortTransfers={item.airPortTransfers}
                                numberOfNights={item.numberOfNights}
                                images={item.images}
                                airTickets={item.airTickets}

                            />
                        ))
                    }
                </div>)}
            { !isPage && <a href="/packages/top-tour-packages" target='_blank'>
                <button className={styles.seeAllButton}>See all</button></a>}
        </div>
    );
}

export default TopPackages;
