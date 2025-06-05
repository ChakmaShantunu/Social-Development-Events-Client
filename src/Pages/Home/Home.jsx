import React, { use, useEffect, useState } from 'react';
import Banner from './Banner';
import UpcomingEvents from './UpcomingEvents';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import Loading from '../../components/Loader/Loading';

const Home = () => {

    const { loading } = use(AuthContext);

    

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;