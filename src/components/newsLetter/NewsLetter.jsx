import React, { useState } from 'react';
import newsletter1 from '../../assets/lotties/newsletter1.json'
import newsletter2 from '../../assets/lotties/newsletter2.json'
import Lottie from 'lottie-react';
import { motion } from "motion/react"

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (!email) {
            alert('Please enter your email');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert("Please enter a valid email");
            return;
        }
        setSubscribed(true);
    }
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-base-300 rounded-box text-center my-24 py-20 flex flex-col md:flex-row lg:flex-row justify-around items-center mx-auto">
            <div>
                <Lottie animationData={newsletter1} loop={true} className='w-xs'></Lottie>
            </div>
            <div className='bg-base-100 py-2 px-10 lg:py-12 lg:px-56 rounded-xl mb-12 md:mb-0 lg:mb-0'>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2">{isSubscribed ? 'Thank you' : 'Subscribe to our Newsletter'}</h2>
                {isSubscribed ? <p className='my-4'>You’ve been subscribed successfully!</p> : <>
                    <p className="my-4 text-sm">Get the latest updates right in your inbox.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} onClick={handleSubscribe} className="btn btn-primary w-full sm:w-auto">Subscribe</motion.button>
                    </div>
                </>}
            </div>
            <div>
                <Lottie animationData={newsletter2} loop={true}></Lottie>
            </div>
        </motion.div>

    );
};

export default NewsLetter;