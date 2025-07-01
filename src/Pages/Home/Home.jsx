import React, { use } from 'react';
import Banner from './Banner';
import UpcomingEvents from './UpcomingEvents';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import Loading from '../../components/Loader/Loading';
import Features from '../../components/features/Features';
import Gallery from '../../components/gallery/Gallery';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import Counter from '../../components/Counter/Counter';
import HowItWorks from '../../components/HowItWorks/HowItWorks';

const Home = () => {

    const { loading } = use(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <Gallery></Gallery>
            <NewsLetter></NewsLetter>
            <Counter></Counter>
        </div>
    );
};

export default Home;