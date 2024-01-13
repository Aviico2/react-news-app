import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LatestNews from '../../components/LatestNews';
import HeroSection from '../../components/HeroSection';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <LatestNews />
            <Footer />
        </>
    )
};

export default Home;