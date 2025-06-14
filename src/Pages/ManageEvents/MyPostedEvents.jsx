import { div } from 'framer-motion/client';
import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from "framer-motion";
import EventCard from '../Shared/EventCard';
import PostedEventCard from './PostedEventCard';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import Loading from '../../components/Loader/Loading';


const MyPostedEvents = ({ email, accessToken }) => {

    const { loading } = useContext(AuthContext);

    const [events, setEvents] = useState([]);


    useEffect(() => {
        if (!email || !accessToken) return;

        fetch(`${import.meta.env.VITE_API_URL}/created-events?email=${email}`, {
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })

    }, [email, accessToken])

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}
            className='my-12'>
            {
                events.length === 0 ? (<p className='text-3xl text-center mt-12 font-bold'>No Event found. You have not created any event yet.</p>) : (<div className='text-center space-y-4'>
                    <h1 className='text-6xl'>My Events</h1>
                    <p>Here are the events you’ve created. Stay engaged with your community by managing and promoting your social development events effectively.</p>
                </div>)
            }
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-8 my-24 mx-auto md:mx-2 lg:mx-4'>
                <AnimatePresence>
                    {
                        events.map(event => (<motion.div key={event._id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.3 }}
                        >
                            <PostedEventCard event={event}></PostedEventCard>
                        </motion.div>))
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default MyPostedEvents;