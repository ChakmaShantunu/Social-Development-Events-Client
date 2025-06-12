

import React from 'react';
import '../../animateBorder.css'
import { div } from 'framer-motion/client';
import { motion } from "motion/react"
import { useTime, useTransform } from 'framer-motion';
import { FaPaperPlane } from "react-icons/fa6";
import AnimatedButton from '../animatedButton/AnimatedButton';
import feature1 from '../../assets/features/features1.jpg'
import feature2 from '../../assets/features/features2.jpg'
import feature3 from '../../assets/features/features3.jpg'
import feature4 from '../../assets/features/features4.jpg'
import feature5 from '../../assets/features/features5.jpg'
import feature6 from '../../assets/features/features6.jpg'
import feature7 from '../../assets/features/features7.jpeg'
import feature8 from '../../assets/features/features8.jpg'




const AnimateCard = () => {

    const time = useTime();
    const rotate = useTransform(time, [0, 5000], [0, 360], {
        clamp: false,
    });

    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, transparent 75%, #fef9c3, #a5f3fc, #d8b4fe, #fef9c3)`
    })
    return (
        <motion.div initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}
            className='my-12'>
            <div className='space-y-4'>
                <h1 className='text-center text-5xl'>Our Features</h1>
                <p className="mt-2 text-center secondary-content max-w-5xl mx-auto">
                    Discover powerful features designed to connect communities, simplify event management, and empower social engagement — all in one platform.
                </p>

            </div>
            <div className="divider max-w-3xl mx-auto"><FaPaperPlane size={25} /></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-24'>
                <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src={feature1}
                                    alt="Shoes"
                                    className="rounded-xl w-full h-60 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center space-y-4">
                                <h2 className="card-title">Tree Plantation Drive</h2>
                                <p>Join us in making the city greener! Participate in our tree plantation event and contribute to a healthier environment for future generations.</p>
                                <div className="card-actions">
                                    <AnimatedButton></AnimatedButton>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src={feature2}
                                    alt="Shoes"
                                    className="rounded-xl w-full h-60 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center space-y-4">
                                <h2 className="card-title">Community Clean-Up Campaign</h2>
                                <p>Let's clean up our neighborhood together! Bring your energy and help make public spaces cleaner and safer for everyone.</p>
                                <div className="card-actions">
                                    <AnimatedButton></AnimatedButton>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src={feature3}
                                    alt="Shoes"
                                    className="rounded-xl w-full h-60 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center space-y-4">
                                <h2 className="card-title">Free Education Workshop</h2>
                                <p>Volunteer as a mentor or organizer to support basic education and learning materials for children in need.</p>
                                <div className="card-actions">
                                    <AnimatedButton></AnimatedButton>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src={feature4}
                                    alt="Shoes"
                                    className="rounded-xl w-full h-60 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center space-y-4">
                                <h2 className="card-title">Free Health Checkup Camp</h2>
                                <p>Doctors and volunteers will offer free medical consultations, basic tests, and health awareness sessions.</p>
                                <div className="card-actions">
                                    <AnimatedButton></AnimatedButton>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src={feature5}
                                    alt="Shoes"
                                    className="rounded-xl w-full h-60 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center space-y-4">
                                <h2 className="card-title">Food Distribution for Homeless</h2>
                                <p>Help us distribute freshly prepared meals to those living on the streets. One meal can make a big difference.</p>
                                <div className="card-actions">
                                    <AnimatedButton></AnimatedButton>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src={feature6}
                                    alt="Shoes"
                                    className="rounded-xl w-full h-60 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center space-y-4">
                                <h2 className="card-title">Skill Development Seminar for Youth</h2>
                                <p>A powerful event focusing on building soft skills, communication, and basic job readiness for young.</p>
                                <div className="card-actions">
                                    <AnimatedButton></AnimatedButton>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src={feature7}
                                    alt="Shoes"
                                    className="rounded-xl w-full h-60 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center space-y-4">
                                <h2 className="card-title">Beach Cleaning Mission</h2>
                                <p>Join hands with fellow volunteers to clean up plastic and waste from our local beaches. Let’s protect marine life and restore nature’s beauty!</p>
                                <div className="card-actions">
                                    <AnimatedButton></AnimatedButton>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src={feature8}
                                    alt="Shoes"
                                    className="rounded-xl w-full h-60 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center space-y-4">
                                <h2 className="card-title">Art for Awareness Workshop</h2>
                                <p>A creative workshop where participants use painting and sketching to spread awareness about social issues like mental health etc.</p>
                                <div className="card-actions">
                                    <AnimatedButton></AnimatedButton>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AnimateCard;