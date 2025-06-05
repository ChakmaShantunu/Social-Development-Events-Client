import React, { useState } from 'react';
import EventCard from '../Shared/EventCard';
import { AnimatePresence, motion } from "framer-motion";
import { div } from 'framer-motion/client';

const UpcomingEvents = ({ events }) => {

    const [showAll, setShowAll] = useState(false);
    const displayEvents = showAll ? events : events.slice(0, 8)

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}
            className='my-24'>
            <div className='text-center space-y-4'>
                <h1 className='text-6xl'>Upcoming Events</h1>
                <p>Explore today’s featured events and get involved in meaningful social development activities. Discover the events scheduled for today. Don’t miss out—stay updated and involved!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 my-24'>
                <AnimatePresence>
                    {
                        displayEvents.map(event => (<motion.div key={event._id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.3 }}
                        >
                            <EventCard event={event}></EventCard>
                        </motion.div>))
                    }
                </AnimatePresence>
            </div>

            <div className='text-center my-8'>
                <button onClick={() => setShowAll(prev => !prev)} className='btn btn-primary'>{showAll ? "Show Less" : "Show More"}</button>
            </div>
        </motion.div>
    );
};

export default UpcomingEvents;