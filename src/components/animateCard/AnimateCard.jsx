
"use client"
import React from 'react';
import '../../animateBorder.css'
import { div } from 'framer-motion/client';
import { motion } from "motion/react"
import { useTime, useTransform } from 'framer-motion';




const AnimateCard = () => {

    const time = useTime();
    const rotate = useTransform(time, [0, 5000], [0, 360], {
        clamp: false,
    });

    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, transparent 75%, #fef9c3, #a5f3fc, #d8b4fe, #fef9c3)`
        // return `conic-gradient(from ${r}deg, #fef9c3, #a5f3fc, #d8b4fe, #fef9c3)`
    })
    return (
        <motion.div initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}
            className='my-12'>>
            <div>
                <h1 className='text-center text-5xl'>Our Features</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-24'>
                <div className='flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <motion.div className='absolute -inset-1 rounded-xl'
                            style={{ background: rotatingBg, filter: 'blur(2px)', opacity: 1 }}></motion.div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
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