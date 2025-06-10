
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import { button } from 'motion/react-client';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { motion } from "motion/react"
import Profile from '../../components/Profile/Profile';
import { useContext, useEffect, useState } from 'react';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute("data-theme", 'dark');
            setTheme(true);
        } else {
            document.documentElement.setAttribute("data-theme", 'light');
            setTheme(false);
        }
    }, [])

    const handleToggle = e => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        setTheme(!theme);
    }

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('sign out user');
                toast('Sign out Successful')
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops.. Sign Out failed!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/upcomingEvents'>Upcoming Events</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-xl w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl hidden md:block lg:block"><img alt="" /> daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <label className="flex cursor-pointer gap-2 mr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" className="toggle theme-controller" onChange={handleToggle} checked={theme} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
                {
                    user ? <>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSignOut} className='btn'>Sign Out</motion.button>
                        <Profile></Profile>
                    </> : <>
                        <NavLink to='/register' className="btn">Register</NavLink>
                        <NavLink to='/signin' className="btn">SignIn</NavLink>
                    </>
                }


            </div>
        </div >
    );
};

export default Navbar;