import React from 'react';
import { Link } from 'react-router';

const AwarenessCampaigns = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Awareness Campaigns</h1>
            <p className="text-lg mb-6">
                Welcome to our Awareness Campaigns page! Here, you can find details about ongoing and upcoming social awareness campaigns that aim to bring positive change to our communities.
            </p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Recent Campaigns</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li><strong>Clean Dhaka Drive:</strong> A city-wide initiative to clean public spaces and promote waste management.</li>
                    <li><strong>Save the Trees:</strong> A campaign encouraging tree planting and forest conservation.</li>
                    <li><strong>Blood Donation Awareness:</strong> Educating people on the importance of donating blood regularly.</li>
                    <li><strong>Health & Hygiene Program:</strong> Promoting good hygiene practices to prevent diseases.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">How You Can Participate</h2>
                <p className="text-lg mb-4">
                    Join any of our campaigns by registering for events, volunteering, or spreading awareness through your network. Together, we can make a significant impact!
                </p>
                <Link to="/upcomingEvents"><button className="btn btn-primary px-6 py-2">Explore Events</button></Link>
            </section>
        </div>
    );
};

export default AwarenessCampaigns;
