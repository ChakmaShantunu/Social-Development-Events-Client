import { div } from 'framer-motion/client';
import { format } from 'date-fns';
import { use } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from "framer-motion";
import EventCard from '../Shared/EventCard';
import PostedEventCard from './PostedEventCard';


const MyPostedEvents = ({ myPostedEvents }) => {

    const events = use(myPostedEvents);
    // console.log(events);

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
                    <p>Explore today’s featured events and get involved in meaningful social development activities. Discover the events scheduled for today. Don’t miss out—stay updated and involved!</p>
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
                            {/* <EventCard event={event}></EventCard> */}
                            <PostedEventCard event={event}></PostedEventCard>
                        </motion.div>))
                    }
                </AnimatePresence>
            </div>

            {/* <div className='text-center my-8'>
                <button onClick={() => setShowAll(prev => !prev)} className='btn btn-primary'>{showAll ? "Show Less" : "Show More"}</button>
            </div> */}
        </motion.div>
    );
};

export default MyPostedEvents;