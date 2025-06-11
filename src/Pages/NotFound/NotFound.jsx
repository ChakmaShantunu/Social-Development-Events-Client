import React from 'react';
import error from '../../assets/lotties/error.json'
import Lottie from 'lottie-react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <Lottie className='w-xs md:w-xl lg:w-2xl mx-auto' animationData={error} loop={true}></Lottie>
                <div className='text-center'>
                    <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Page Not Found</h1>
                    <p className="mb-5">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;