import React, { useEffect, useState } from 'react';
import { CiLocationArrow1 } from "react-icons/ci";
import Profile from '../../../components/Profile/Profile';

// Chart.js imports
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DashboardHome = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const defaultTheme = prefersDark ? "dark" : "light";
            setTheme(defaultTheme);
            document.documentElement.setAttribute("data-theme", defaultTheme);
        }
    }, []);

    const handleToggle = (e) => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const boxes = [
        {
            id: 1,
            title: 'Total Events',
            value: 15,
            description: 'Number of events created by you.'
        },
        {
            id: 2,
            title: 'Upcoming Events',
            value: 5,
            description: 'Events that are scheduled in the future.'
        },
        {
            id: 3,
            title: 'Participants',
            value: 120,
            description: 'Total participants across your events.'
        },
        {
            id: 4,
            title: 'Active Campaigns',
            value: 3,
            description: 'Currently running campaigns you manage.'
        }
    ];

    // Sample data for Bar chart (Events per category)
    const data = {
        labels: ['Clean-up', 'Plantation', 'Donation', 'Health'],
        datasets: [
            {
                label: 'Number of Events',
                data: [5, 4, 3, 3],
                backgroundColor: 'rgba(37, 99, 235, 0.7)', // Tailwind blue-600 with opacity
                borderRadius: 5,
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                
            },
            title: {
                display: true,
                text: 'Events by Category',
                font: {
                    size: 18
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                
            }
        }
    };

    return (
        <div className='space-y-6'>
            <div className='flex justify-end items-center gap-4'>
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" onChange={handleToggle} checked={theme === 'dark'} value="synthwave" />

                    {/* sun icon */}
                    <svg
                        className="swap-off h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
                <Profile />
            </div>

            <div className='flex gap-6 flex-wrap'>
                {boxes.map(box => (
                    <div
                        key={box.id}
                        className='border border-gray-300 rounded-lg p-6 flex-1 min-w-[250px] shadow-md hover:shadow-lg transition flex justify-between'
                    >
                        <div>
                            <h2 className='text-xl font-semibold mb-2'>{box.title}</h2>
                            <p className='text-3xl font-bold mb-2'>{box.value}</p>
                            <p className='text-gray-600'>{box.description}</p>
                        </div>
                        <div>
                            <div className='bg-gray-100 p-3 rounded-full'>
                                <CiLocationArrow1 size={20} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart Section */}
            <div className='mt-8 p-6 border border-gray-300 rounded-lg shadow-md bg-base-100'>
                <Bar options={options} data={data} />
            </div>
        </div>
    );
};

export default DashboardHome;
