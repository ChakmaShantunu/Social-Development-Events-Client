import { div, link } from 'framer-motion/client';
import React from 'react';
import { FaUserPlus, FaSearch, FaRegCalendarCheck, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const steps = [
    {
        icon: <FaUserPlus className="text-4xl text-primary mb-4" />,
        title: "Create Account",
        description: "Sign up and become a member of our development platform in seconds.",
        link: '/register'
    },
    {
        icon: <FaSearch className="text-4xl text-primary mb-4" />,
        title: "Browse Events",
        description: "Explore events that match your interests and goals.",
        link: '/addEvent'
    },
    {
        icon: <FaRegCalendarCheck className="text-4xl text-primary mb-4" />,
        title: "Join & Participate",
        description: "Register for events, join discussions, and grow your skills.",
        link: '/upcomingEvents'
    },
    {
        icon: <FaShareAlt className="text-4xl text-primary mb-4" />,
        title: "Share Your Experience",
        description: "Post about your learnings and inspire others in the community.",
        link: '/addShare'
    },
];


const HowItWorks = () => {
    return (
        <div className="py-16 bg-base-100">
            <div className="text-center mb-12 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">How It Works</h2>
                <p className="">Follow these simple steps to get started</p>
            </div>

            {/* <div className="mx-auto grid gap-10 p-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="p-6 bg-base-200 rounded-2xl shadow-md text-center hover:shadow-xl transition duration-300"
                    >
                        <div className="flex justify-center">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="">{step.description}</p>
                    </div>
                ))}
            </div> */}

            <div className='mx-auto grid gap-10 p-6 sm:grid-cols-2 lg:grid-cols-4'>
                {steps.map((step, index) => {
                    const cardContent = (
                        <>
                            <div className="flex justify-center">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="">{step.description}</p>
                        </>
                    );
                    return (
                        <div key={index} className='p-6 bg-base-200 rounded-2xl shadow-md text-center hover:shadow-xl transition duration-300'>
                            {step.link ? (<Link to={step.link}>{cardContent}</Link>) : cardContent}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default HowItWorks;
