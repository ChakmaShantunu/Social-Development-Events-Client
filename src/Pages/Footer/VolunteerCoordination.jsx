import React from 'react';

const VolunteerCoordination = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Volunteer Coordination</h1>
            <p className="text-lg mb-6">
                Our Volunteer Coordination page is designed to help organize and manage volunteers effectively for various social development events.
            </p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Recruit and register volunteers for different events.</li>
                    <li>Provide training and resources to prepare volunteers.</li>
                    <li>Assign tasks and manage volunteer schedules.</li>
                    <li>Facilitate communication between volunteers and event organizers.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">How to Get Involved</h2>
                <p className="text-lg mb-4">
                    If you want to volunteer, sign up for upcoming events, participate in training sessions, and contribute your skills and time to make a difference in the community.
                </p>
                <button className="btn btn-primary px-6 py-2">Join as Volunteer</button>
            </section>
        </div>
    );
};

export default VolunteerCoordination;
