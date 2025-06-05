import React, { useState } from 'react';
import EventCard from '../Shared/EventCard';
import { motion } from "framer-motion";
import { div } from 'framer-motion/client';

const UpcomingEvents = ({ events }) => {

    const [showAll, setShowAll] = useState(false);
    const displayEvents = showAll ? events : events.slice(0, 8)

    return (
        <div>
            <h2 className="text-3xl">upcoming events of the day : {events.length}</h2>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
                viewport={{ once: true, amount: 0.2 }}
                className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 my-24'>
                {
                    displayEvents.map(event => <EventCard key={event._id} event={event}></EventCard>)
                }
            </motion.div>
            <div className='text-center my-8'>
                <button onClick={() => setShowAll(!showAll)} className='btn btn-primary'>{showAll ? "Show Less" : "Show More"}</button>
            </div>
        </div>
    );
};

export default UpcomingEvents;