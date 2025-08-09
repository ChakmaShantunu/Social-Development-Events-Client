
"use client"
import React from 'react';
import '../../animateBorder.css'
import { div } from 'framer-motion/client';
import { motion } from "motion/react"
import { useTime, useTransform } from 'framer-motion';
import { Link } from 'react-router';




const AnimatedButton = () => {

    const time = useTime();
    const rotate = useTransform(time, [0, 5000], [0, 360], {
        clamp: false,
    });

    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, transparent 25%, #bdd222, #1319e8, #1740cd, #bddf30)`
    })
    return (
        <div className='flex gap-4 items-center justify-center'>
            <div className='relative'>
                <Link to="/upcomingEvents"><button className='relative px-3 py-2 btn btn-primary z-10 rounded'>See Details</button></Link>
                <motion.div className='absolute -inset-1 rounded p-2'
                    style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
            </div>
        </div>
    );
};

export default AnimatedButton;