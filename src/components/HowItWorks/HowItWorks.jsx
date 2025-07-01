import React from 'react';
import { FaUserPlus, FaSearch, FaRegCalendarCheck } from 'react-icons/fa';

const steps = [
    {
        icon: <FaUserPlus className="text-4xl text-primary mb-4" />,
        title: "Create Account",
        description: "Sign up and become a member of our development platform in seconds.",
    },
    {
        icon: <FaSearch className="text-4xl text-primary mb-4" />,
        title: "Browse Events",
        description: "Explore events that match your interests and goals.",
    },
    {
        icon: <FaRegCalendarCheck className="text-4xl text-primary mb-4" />,
        title: "Join & Participate",
        description: "Register for events, join discussions, and grow your skills.",
    },
];

const HowItWorks = () => {
    return (
        <div className="py-16 bg-base-100">
            <div className="text-center mb-12 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">How It Works</h2>
                <p className="">Follow these simple steps to get started</p>
            </div>

            <div className="max-w-6xl mx-auto grid gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
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
            </div>
        </div>
    );
};

export default HowItWorks;
