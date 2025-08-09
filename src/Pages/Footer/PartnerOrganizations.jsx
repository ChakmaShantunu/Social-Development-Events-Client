import React from 'react';

const PartnerOrganizations = () => {
    const partners = [
        { id: 1, name: 'Organization A', website: 'https://org-a.com' },
        { id: 2, name: 'Organization B', website: 'https://org-b.com' },
        { id: 3, name: 'Organization C', website: 'https://org-c.com' },
    ];

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Partner Organizations</h1>
            <p className="mb-6 text-lg">
                We proudly collaborate with the following organizations to drive social development events:
            </p>
            <ul className="list-disc list-inside space-y-3">
                {partners.map(partner => (
                    <li key={partner.id}>
                        <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            {partner.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PartnerOrganizations;
