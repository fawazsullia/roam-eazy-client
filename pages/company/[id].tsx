import ClientContainer from '@/components/ClientContainer/ClientContainer';
import CompanyPackages from '@/components/Company/CompanyPackages';
import Hero from '@/components/Home/Hero';
import React from 'react';
import { useRouter } from 'next/router';

const FeaturedPackages: React.FC = () => {
    const router = useRouter();
    const { id } = router.query as { id: string };

    return (
        <ClientContainer>
            <main>
                <Hero />
                { id && <CompanyPackages companyToken={id}/>}
            </main>
        </ClientContainer>
    );
};

export default FeaturedPackages;