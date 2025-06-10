import React, { useContext, useEffect, useState } from 'react';
import EventCard from '../Shared/EventCard';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import Loading from '../../components/Loader/Loading';
import { AnimatePresence, motion } from "motion/react"

const UpcomingEvents = () => {

    const { loading, user } = useContext(AuthContext);

    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTitle, setSearchTitle] = useState("");
    const [inputText, setInputText] = useState('')
    // const today = new Date();

    // const upcomingEvents = events.filter(event => new Date(event.eventDate) >= today);

    const [showAll, setShowAll] = useState(false);

    // use




    // useEffect(() => {

    //     fetch(`${import.meta.env.VITE_API_URL}/events`, {
    //         credentials: 'include'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setEvents(data);
    //             setFilteredEvents(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [])



    // useEffect(() => {
    //     const today = new Date();

    //     let upcoming = events.filter(event => new Date(event.eventDate) >= today);

    //     if (selectedCategory !== 'all') {
    //         upcoming = upcoming.filter(event => event.eventType === selectedCategory);
    //     }

    //     if (searchTitle.trim()) {
    //         upcoming = upcoming.filter(e => e.title.toLowerCase().includes(searchTitle.toLowerCase()));
    //     }

    //     setFilteredEvents(upcoming);
    // }, [events, selectedCategory, searchTitle])

    const displayEvents = showAll ? events : events.slice(0, 8);

    useEffect(() => {
        let query = '';

        if (selectedCategory !== 'all') {
            query += `eventType=${selectedCategory}`
        }

        if (searchTitle.trim()) {
            if (query) query += '&';
            query += `title=${encodeURIComponent(searchTitle.trim())}`;
        }

        fetch(`${import.meta.env.VITE_API_URL}/events?${query}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEvents(data);
            })
            .catch(error => {
                console.log(error);
            })

    }, [selectedCategory, searchTitle])


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
            <div className='text-center space-y-4'>
                <h1 className='text-6xl'>Upcoming Events</h1>
                <p>Explore today’s featured events and get involved in meaningful social development activities. Discover the events scheduled for today. Don’t miss out—stay updated and involved!</p>
            </div>
            <div className='flex justify-around items-center mt-12'>
                <div className='flex justify-center items-center'>
                    <label className="input w-2xl mr-4 h-12">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" value={inputText} onChange={e => setInputText(e.target.value)} className="grow" placeholder="Search" />
                        <kbd className="kbd kbd-sm">⌘</kbd>
                        <kbd className="kbd kbd-sm">K</kbd>
                    </label>
                    <button onClick={() => setSearchTitle(inputText)} className="btn">Search</button>
                </div>
            </div>

            <div className='mt-12'>
                <label className="label font-semibold mr-4">Category: </label>
                <select name="eventType" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} id="" className='select border' required>
                    <option value="" disabled>Choose a category</option>
                    <option value="all">All Event</option>
                    <option value="Cleanup">Clean-up</option>
                    <option value="Plantation">Tree Plantation</option>
                    <option value="Donation">Blood Donation</option>
                    <option value="Health">Health Camp</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-8 mb-24 mt-12 mx-4'>
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