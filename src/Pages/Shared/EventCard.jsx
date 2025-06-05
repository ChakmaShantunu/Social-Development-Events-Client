import React from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const EventCard = ({ event }) => {

    const { title, description, thumbnailUrl, location, maxParticipants, eventDate } = event
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex justify-center gap-2'>
                <figure>
                    <img
                        src={thumbnailUrl}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className="text-4xl">{title}</h3>
                    <p className='flex gap-1 items-center'>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Participants : {maxParticipants}</p>
                <p>{description}</p>
                <div className="card-actions">
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