import React, { use } from 'react';
import Banner from './Banner';
import UpcomingEvents from './UpcomingEvents';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import Loading from '../../components/Loader/Loading';
import Features from '../../components/features/Features';
import Gallery from '../../components/gallery/Gallery';
import NewsLetter from '../../components/newsLetter/NewsLetter';

const Home = () => {

    const { loading } = use(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Gallery></Gallery>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;