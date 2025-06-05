import React, { use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { IoCheckbox } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import Loading from '../../components/Loader/Loading';

const EventDetails = () => {

    const { loading } = use(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    const { thumbnailUrl, title, description, maxParticipants, eventDate, location, eventType, _id } = useLoaderData();
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}
            className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row lg:flex-row gap-12 my-12">
            <figure className="md:w-1/3 w-full">
                <img src={thumbnailUrl} alt="Web Design & Development" className="w-full h-auto object-cover md:h-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">{title}</h2>
                <p className='text-lg'>{description}</p>
                <p><strong>Type:</strong> {eventType}</p>
                <p><strong>Date:</strong> {eventDate}</p>
                <p><strong>Time:</strong> 10:00 AM - 4:00 PM (GMT+6)</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Participants:</strong> {maxParticipants}</p>
                <h3 className='text-3xl mb-3'>Key Responsibilities: </h3>
                <ul className='list-none space-y-2 mb-4'>
                    <li className='flex items-center gap-2'><IoCheckbox /> Coordinate with speakers and guests to ensure smooth sessions.</li>
                    <li className='flex items-center gap-2'><IoCheckbox /> Manage event registration and attendee communication.</li>
                    <li className='flex items-center gap-2'><IoCheckbox /> Ensure venue setup and technical arrangements are complete.</li>
                    <li className='flex items-center gap-2'><IoCheckbox /> Handle marketing and promotion of the event.</li>
                    <li className='flex items-center gap-2'><IoCheckbox /> Collect feedback and analyze event success for improvements</li>
                </ul>
                <div className="card-actions mt-4">
                    <Link to={`/joinEvent/${_id}`}><button className="btn btn-outline">Join Event</button></Link>
                    <Link><button onClick={handleBack} className="btn btn-outline">Back</button></Link>
                </div>
            </div>
        </motion.div>
    );
};

export default EventDetails;