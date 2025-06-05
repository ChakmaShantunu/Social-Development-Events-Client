import Lottie from 'lottie-react';
import React from 'react';
import loaderLottie from '../../assets/lotties/loadingLotties.json'

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Lottie animationData={loaderLottie} loop={true} className='w-auto'></Lottie>
        </div>
    );
};

export default Loading;