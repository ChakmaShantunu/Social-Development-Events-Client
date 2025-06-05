import React from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"
import { FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({ event }) => {

    const { title, description, thumbnailUrl, location, maxParticipants, eventDate } = event
    return (
        <div className="card bg-base-100 w-96 shadow-sm h-full">
            <div className='flex justify-center gap-2'>
                <figure>
                    <img
                        src={thumbnailUrl}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className="text-3xl">{title}</h3>
                    <p className='flex gap-1 items-center'><FaMapMarkerAlt /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Date : {eventDate}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <p>Participants : {maxParticipants}</p>

                </div>
                <div className="card-actions justify-end">
                    <Link><motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary">Show Details</motion.button></Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;