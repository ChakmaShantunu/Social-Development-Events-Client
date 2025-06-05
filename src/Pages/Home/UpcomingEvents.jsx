import React from 'react';
import EventCard from '../Shared/EventCard';

const UpcomingEvents = ({ events }) => {

    return (
        <div>
            <h2 className="text-3xl">upcoming events of the day : {events.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 my-24'>
                {
                    events.map(event => <EventCard key={event._id} event={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;