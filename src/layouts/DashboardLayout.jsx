import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import logo from '../assets/logo/logo.png'
import { FaCalendarAlt, FaChartBar } from 'react-icons/fa';



const DashboardLayout = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">Dashboard</div>
                </div>
                {/* Page content here */}
                <div className='p-6'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div data-aos="fade-right" className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 pl-4 space-y-4">
                    {/* Sidebar content here */}
                    <div className='flex items-center'>
                        <img className='hidden md:block lg:block' src={logo} alt="" />
                        <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold hidden md:block lg:block">NoboUddog</Link>
                    </div>
                    <li>
                        <Link to="/dashboard"><FaCalendarAlt size={20} className="inline mr-2" />Events Details</Link>
                    </li>

                    <li>
                        <Link to="/dashboard/totalEventsCard"><FaCalendarAlt size={20} className="inline mr-2" />Total Events Created</Link>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default DashboardLayout;