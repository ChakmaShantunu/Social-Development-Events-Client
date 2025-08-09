import React from 'react';

const FundraisingSupport = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Fundraising Support</h1>
            <p className="text-lg mb-6">
                Our Fundraising Support page is dedicated to helping individuals and organizations raise funds for social development events and community projects.
            </p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">How We Can Help</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Providing guidance on planning and executing successful fundraising campaigns.</li>
                    <li>Connecting you with potential donors and sponsors.</li>
                    <li>Offering tools and resources to promote your fundraising efforts.</li>
                    <li>Sharing tips on creating compelling fundraising content and outreach strategies.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Ways to Fundraise</h2>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Online crowdfunding platforms.</li>
                    <li>Organizing community events and drives.</li>
                    <li>Corporate sponsorships and partnerships.</li>
                    <li>Social media campaigns and awareness drives.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
                <p className="text-lg mb-4">
                    Ready to start your fundraising journey? Contact our support team or explore upcoming events to join and raise funds for causes you care about.
                </p>
                <button className="btn btn-primary px-6 py-2">Contact Support</button>
            </section>
        </div>
    );
};

export default FundraisingSupport;
