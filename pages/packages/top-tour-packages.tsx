import ClientContainer from '@/components/ClientContainer/ClientContainer';
import Hero from '@/components/Home/Hero';
import TopPackages from '@/components/Home/TopPackages';
import React from 'react';

const FeaturedPackages: React.FC = () => {
    return (
        <ClientContainer>
            <main>
                <Hero />
                <TopPackages isPage={true}/>
            </main>
        </ClientContainer>
    );
};

export default FeaturedPackages;