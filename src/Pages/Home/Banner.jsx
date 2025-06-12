import React from 'react';
import { easeInOut, easeOut, motion } from "motion/react"
import banner from '../../assets/Banner/banner.jpg'
import banner2 from '../../assets/Banner/banner2.jpg'
import banner3 from '../../assets/Banner/banner3.jpg'
import banner4 from '../../assets/Banner/banner4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={false}
                className="w-full"
            >
                <SwiperSlide>
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                                className="text-5xl font-bold leading-none sm:text-6xl">Empower Communities, One Event at a Time
                            </motion.h1>
                            <motion.p
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeOut, type: 'spring', stiffness: 80, damping: 10 }}
                                className="mt-6 mb-8 text-lg sm:mb-12">Join hands to create, discover, and support social development events that drive real change.
                                <br className="hidden md:inline lg:hidden" />From local cleanups to global campaigns — your impact starts here
                            </motion.p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary px-8 py-3">Get Started</motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-outline px-8 py-3">Join Event</motion.button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <motion.img
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                                src={banner} alt="" className="object-contain rounded-2xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                                className="text-5xl font-bold leading-none sm:text-6xl">Blood Donation Camp - Gazipur City
                                {/* <span className="dark:text-violet-600">One Event at a Time</span> */}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeOut, type: 'spring', stiffness: 80, damping: 10 }}
                                className="mt-6 mb-8 text-lg sm:mb-12">Help save lives by donating blood at the upcoming Blood Donation Camp in Gazipur City. Your small act of kindness can make a huge difference for patients in need. The event will also include health check-ups and awareness sessions on the importance of regular blood donation.
                                {/* <br className="hidden md:inline lg:hidden" />From local cleanups to global campaigns — your impact starts here */}
                            </motion.p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary px-8 py-3">Get Started</motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-outline px-8 py-3">Join Event</motion.button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <motion.img
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                                src={banner2} alt="" className="object-contain rounded-2xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                                className="text-5xl font-bold leading-none sm:text-6xl">Road Cleaning in Mirpur 10, Dhaka
                            </motion.h1>
                            <motion.p
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeOut, type: 'spring', stiffness: 80, damping: 10 }}
                                className="mt-6 mb-8 text-lg sm:mb-12">Join hands with local volunteers to clean up the roads and public spaces in Mirpur 10, Dhaka. Let’s make our neighborhood cleaner and greener by removing trash, sweeping streets, and spreading awareness about waste management.
                                {/* <br className="hidden md:inline lg:hidden" />From local cleanups to global campaigns — your impact starts here */}
                            </motion.p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary px-8 py-3">Get Started</motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-outline px-8 py-3">Join Event</motion.button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:w-[60%]xl:h-112 2xl:h-128">
                            <motion.img
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                                src={banner3} alt="" className="object-cover rounded-2xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                                className="text-5xl font-bold leading-none sm:text-6xl">Tree Plantation, Rangamati Chittagong
                            </motion.h1>
                            <motion.p
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeOut, type: 'spring', stiffness: 80, damping: 10 }}
                                className="mt-6 mb-8 text-lg sm:mb-12">Be a part of a green revolution in Rangamati, Chittagong! Participate in our tree plantation drive to plant native trees and improve local air quality.
                                {/* <br className="hidden md:inline lg:hidden" />From local cleanups to global campaigns — your impact starts here */}
                            </motion.p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary px-8 py-3">Get Started</motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-outline px-8 py-3">Join Event</motion.button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:w-[60%]xl:h-112 2xl:h-128">
                            <motion.img
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                                src={banner4} alt="" className="object-cover rounded-2xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;