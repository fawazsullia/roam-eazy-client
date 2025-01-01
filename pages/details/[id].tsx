import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios.utils';
import ClientContainer from '@/components/ClientContainer/ClientContainer';
import HeroDetails from '@/components/PackageDetails/HeroDetails';
import styles from './[id].module.css';
import CardDetail from '@/components/PackageDetails/CardDetail/CardDetail';
import Logoipsumcard from '@/components/PackageDetails/CardDetail/LogoipsumCard';
import { IListing } from '@/inerfaces/IListing.interface';
import { Spin } from 'antd';
import { ICompany, ICompanyDetail } from '@/inerfaces/ICompany.interface';

const PackageDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [packageDetails, setPackageDetails] = useState<IListing | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [company, setCompany] = useState<ICompany & { details: ICompanyDetail } | null>(null);

    const fetchPackageDetails = async () => {
        try {
            const result = await axiosInstance.get<IListing>(`/api/listing/get-package/${id}`);
            const companyId = result.data.companyId;
            const { data: company } = await axiosInstance.get<ICompany & { details: ICompanyDetail }>(`/api/company/${companyId}`);
            setCompany(company);
            setPackageDetails(result.data);
        } catch (err) {
            console.log(err);
            setError('Failed to fetch package details');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchPackageDetails()
        }
    }, [id]);

    return (
        <div className={styles.detailDiv}>
            <ClientContainer>
                <div>
                    <HeroDetails destination={packageDetails?.to ?? '.....'} />

                    {<div className={styles.container}>
                        {
                            loading && <div><Spin /></div>
                        }
                        {
                            error && <div>{error}</div>
                        }
                        {packageDetails && company && <div className={styles.cardDetailDiv}>
                            <div className={styles.cardDetail}>
                                <CardDetail listing={packageDetails} company={company} />
                            </div>
                            <div className={styles.cardDetail}>
                                <Logoipsumcard company={company} listing={packageDetails} />
                            </div>
                        </div>}
                    </div>}
                    {/* <SimilarPackages /> */}
                </div>
            </ClientContainer>

        </div>
    );
};

export default PackageDetails;
