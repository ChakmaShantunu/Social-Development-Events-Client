import React from 'react';
import CountUp from 'react-countup';
import patientsImg from '../../assets/countUp/success-patients.png'
import reviewImg from '../../assets/countUp/success-review.png'
import staffsImg from '../../assets/countUp/success-staffs.png'
import { motion } from "motion/react"
import { MdCreateNewFolder } from "react-icons/md";
import { MdFeedback } from "react-icons/md";

const Counter = () => {

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}
            className='text-center py-12 rounded-2xl mb-32'>
            <h1 className='text-2xl lg:text-4xl font-bold'>We Empower Social Impact Through Events</h1>
            <p className='text-sm lg:text-md mt-4 px-4 md:px-0 lg:px-0'>Our platform connects communities, organizations, and volunteers to drive positive change through impactful events.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
                <div className='p-12 bg-base-300 mb-12 rounded-3xl mx-10 md:mx-0'>
                    
                    <MdCreateNewFolder size={50}/>
                    <CountUp className='font-bold text-5xl' end={199} duration={40}></CountUp><span className='text-4xl ml-2 font-bold text-gray-400'>+</span>
                    <h1 className='text-gray-400 text-4xl font-bold text-left pt-4'>Events Created</h1>
                </div>
                <div className='p-12 bg-base-300 mb-12 rounded-3xl mx-10 md:mx-0'>
                    <img src={reviewImg} alt="" />
                    {/* <MdFeedback size={50}/> */}
                    <CountUp className='font-bold text-5xl' end={467} duration={30}></CountUp><span className='text-4xl ml-2 font-bold text-gray-400'>+</span>
                    <h1 className='text-gray-400 text-4xl font-bold text-left pt-4'>Total Feedback</h1>
                </div>
                <div className='p-12 bg-base-300 mb-12 rounded-3xl mx-10 md:mx-0'>
                    <img src={patientsImg} alt="" />
                    <CountUp className='font-bold text-5xl' end={1900} duration={10}></CountUp><span className='text-4xl ml-2 font-bold text-gray-400'>+</span>
                    <h1 className='text-gray-400 text-4xl font-bold text-left pt-4'>Participants</h1>
                </div>
                <div className='p-12 bg-base-300 mb-12 rounded-3xl mx-10 md:mx-0'>
                    <img src={staffsImg} alt="" />
                    <CountUp className='font-bold text-5xl' end={300} duration={30}></CountUp><span className='text-4xl ml-2 font-bold text-gray-400'>+</span>
                    <h1 className='text-gray-400 text-4xl font-bold text-left pt-4'>Total Joined</h1>
                </div>

            </div>
        </motion.div>
    );
};

export default Counter;