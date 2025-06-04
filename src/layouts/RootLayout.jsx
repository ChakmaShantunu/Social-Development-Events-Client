import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;