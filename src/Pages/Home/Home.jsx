import React, { use, useEffect, useState } from 'react';
import Banner from './Banner';
import UpcomingEvents from './UpcomingEvents';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import Loading from '../../components/Loader/Loading';

const Home = () => {

    const { loading } = use(AuthContext);

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <UpcomingEvents events={events}></UpcomingEvents>
        </div>
    );
};

export default Home;