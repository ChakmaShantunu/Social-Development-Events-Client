import React from 'react';
import { Link } from 'react-router';

const TotalEventsCard = ({ total = 5 }) => {
    return (
        <Link
            to="/dashboard"
            className="block max-w-sm p-6 bg-base-100 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-gray-800 dark:text-gray-100 text-xl font-semibold mb-2">
                        Total Events Created
                    </h2>
                    <p className="text-4xl font-bold text-blue-600">
                        {total}
                    </p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    {/* <CiCalendarCheck size={40} className="text-blue-600" /> */}
                </div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
                Click to view detailed dashboard and manage your events.
            </p>
        </Link>
    );
};

export default TotalEventsCard;
