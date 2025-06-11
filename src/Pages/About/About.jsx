import React from 'react';

const About = () => {
    return (
        <div className="py-20 bg-base-300">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold mb-6">About Our Platform</h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
                    We are on a mission to drive social change through meaningful events. Our platform connects volunteers, organizers, and communities to collaborate, grow, and make an impact together.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <div className="bg-base-100 shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold text-primary mb-3">🌱 Our Mission</h3>
                        <p className="">
                            Empower local communities to create and participate in events that bring positive change to society.
                        </p>
                    </div>
                    <div className="bg-base-100 shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold text-primary mb-3">🚀 Our Vision</h3>
                        <p className="">
                            Build a future where collaboration through events creates a more aware, united, and impactful world.
                        </p>
                    </div>
                    <div className="bg-base-100 shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold text-primary mb-3">💡 Core Values</h3>
                        <ul className="">
                            <li>Inclusivity</li>
                            <li>Transparency</li>
                            <li>Empowerment</li>
                            <li>Action-Oriented</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;