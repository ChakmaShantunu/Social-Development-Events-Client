import React, { use } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"
import { format } from 'date-fns';
import { FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';

const EventCard = ({ event }) => {
    const { user } = use(AuthContext);

    const { title, description, thumbnailUrl, location, maxParticipants, eventDate, eventType, _id } = event
    return (
        <div className="card bg-base-100 w-96 shadow-sm h-full cursor-pointer hover:scale-105 transition-transform duration-300">
            {/* <div className='flex justify-center gap-2'>
                
            </div> */}
            <figure className='w-full h-60 overflow-hidden rounded'>
                <img
                className='w-full h-full object-cover'
                    src={thumbnailUrl}
                    alt="Shoes" />
            </figure>
            {/* <div>
                <h3 className="text-3xl">{title}</h3>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> {location}</p>
            </div> */}
            {/* <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> {location}</p>
            </div> */}
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='flex gap-1 items-center'><FaMapMarkerAlt /> {location}</p>
                <p>Date : {format(new Date(eventDate), 'MMMM dd, yy')}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <p>Participants : {maxParticipants}</p>
                    <p>Type : {eventType}</p>

                </div>
                <div className="card-actions justify-end">
                    <Link to={`/eventDetails/${_id}`}><motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary">View Event</motion.button></Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;