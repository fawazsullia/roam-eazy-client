import { useEffect, useState } from 'react';
import styles from '../slug/List.module.css';
import { axiosInstance } from '@/utils/axios.utils';
import { IListing } from '@/inerfaces/IListing.interface';
import { Button, Empty, Popover, Spin } from 'antd';
import Image from 'next/image';
import { Config } from '@/config/base.config';
import cardlogo from "../../assets/images/Cardlogo.svg"
import nightIcon from "../../assets/images/nights.svg";
import flight from "../../assets/images/flight.svg";
import insurance from "../../assets/images/Insurance.svg";
import hotel from "../../assets/images/Hotel.svg";
import transportation from "../../assets/images/Transportation.svg";
import righticon from "../../icons/rightArrow.svg";
import lefticon from "../../icons/leftArrow.svg";

interface ITopPackagesProps {
    companyToken: string;
}

const CompanyPackages = (props: ITopPackagesProps) => {
    const { companyToken } = props;
    const [rowsPerPage, setLimit] = useState<number>(15);
    const [listings, setListings] = useState<IListing[]>([]);
    const [isListingLoading, setIsListingLoading] = useState(false);
    const [listingError, setListingError] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [companyLoading, setCompanyLoading] = useState(false);
    const [companyError, setCompanyError] = useState('');
    const [totalListings, setTotalListings] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [company, setCompany] = useState<any>(null);

    const totalPages = Math.ceil(totalListings / rowsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };


    const fetchListings = async () => {
        setIsListingLoading(true);
        try {
            const results = await axiosInstance.post('/api/listing/get-listings', {
                offset: 0,
                limit: rowsPerPage,
                company: companyId
            });
            setListings(results.data.listings);
            setTotalListings(results.data.total);
        } catch (err) {
            console.log(err);
            setListingError('Failed to fetch packages');
        } finally {
            setIsListingLoading(false);
        }
    }

    const fetchCompany = async () => {
        setCompanyLoading(true);
        try {
            const { data } = await axiosInstance.get(`/api/company/token/${companyToken}`);
            setCompanyId(data.id.toString());
            setCompany(data);
        } catch (err) {
            console.log(err);
            setCompanyError('Failed to fetch company');
        } finally {
            setCompanyLoading(false);
        }
    }

    useEffect(() => {
        fetchCompany();
    }, []);

    useEffect(() => {
        if (companyId) {
            fetchListings();
        }
    }, [rowsPerPage, companyId]);

    return (
        <div className={styles.container}>
            <h2>Packages</h2>
            {companyError && <Popover content={companyError}><div>Failed to fetch company</div></Popover>}
            {listingError && <Popover content={listingError}><div>Failed to fetch packages</div></Popover>}
            {(isListingLoading || companyLoading) ? <Spin size="large" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "30vh" }} /> : <div className={styles.cardDetail}>
                {listings.length === 0 ? (
                    <div className={styles.noResults}><Empty description="No Listings found" /></div>
                ) : (
                    <>
                        <div className={styles.table}>
                            <div>
                                {listings.map((data, cardIndex) => (
                                    <div key={data._id}>
                                        <div className={styles.maincardDiv}>
                                            <div className={styles.imageContainer}>
                                                <Image
                                                    src={`${Config.imageBaseUrl}?id=${data.images[0]}`}
                                                    className={styles.image}
                                                    alt="card"
                                                    width={400}
                                                    height={200}
                                                    sizes="100vw"
                                                    style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                                                />
                                            </div>
                                            <div>
                                                <div>
                                                    <div className={styles.headingDiv}>
                                                        <h1 className={styles.heading}>{data.title}</h1>
                                                        <Image
                                                            src={`${Config.imageBaseUrl}?id=${company.details?.logo}`}
                                                            className={styles.cardlogoimage} alt="card"
                                                            width={100}
                                                            height={100} 
                                                        />
                                                        
                                                    </div>

                                                    {data.overview && <><h4 className={styles.subtitle}>Overview:</h4>
                                                        <p className={styles.pragraph}>{data.overview.slice(0, 250)}...</p></>}
                                                </div>
                                                <div>
                                                    <p className={styles.subtitle}>Includes:</p>
                                                    <div className={styles.ul}>
                                                        {data.numberOfNights && <div className={styles.ulinnerDiv}>
                                                            <Image
                                                                src={nightIcon}
                                                                className={styles.iconimage}
                                                                alt="card"
                                                            />
                                                            <li>{data.numberOfNights}</li>
                                                        </div>}
                                                        {data.airTickets && <div className={styles.ulinnerDiv}>
                                                            <Image
                                                                src={flight}
                                                                className={styles.iconimage}
                                                                alt="card"
                                                            />
                                                            <li>Flight</li>
                                                        </div>}
                                                        {data.travelInsurance && <div className={styles.ulinnerDiv}>
                                                            <Image
                                                                src={insurance}
                                                                className={styles.iconimage}
                                                                alt="card"
                                                            />
                                                            <li>Insurance</li>
                                                        </div>}
                                                        {data.hotels?.length && <div className={styles.ulinnerDiv}>
                                                            <Image
                                                                src={hotel}
                                                                className={styles.iconimage}
                                                                alt="card"
                                                            />
                                                            <li>Hotel</li>
                                                        </div>}
                                                        {data.airPortTransfers && <div className={styles.ulinnerDiv}>
                                                            <Image
                                                                src={transportation}
                                                                className={styles.iconimage}
                                                                alt="card"
                                                            />
                                                            <li>Transportation</li>
                                                        </div>}
                                                    </div>
                                                </div>
                                                <div className={styles.endContainer}>
                                                    <div>
                                                        <div className={styles.twin}>
                                                            AED {data.basePrice} <span>Per person on Twin Sharing</span>
                                                        </div>
                                                    </div>

                                                    <a href={`/details/${data.listingId}`}>
                                                        <Button className={styles.seemore}>View Details</Button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.pagination}>
                            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                                <Image src={lefticon} alt="card" />
                            </button>
                            <span>
                                Page <span className={styles.currentPage}>{currentPage}</span> of{" "}
                                {totalPages}
                            </span>
                            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                                <Image src={righticon} alt="card" />
                            </button>
                        </div>
                    </>)}
            </div>}
        </div>
    );
}

export default CompanyPackages;
