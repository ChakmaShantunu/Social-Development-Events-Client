import React from 'react';
import { motion } from "motion/react"
import road_clean from '../../assets/gallery/road-cleaning.jpg'
import garbage_clean from '../../assets/gallery/garbage-clean.jpg'
import social_banner from '../../assets/gallery/social-banner.jpg'
import gallery1 from '../../assets/gallery/gallery1.jpg'
import gallery2 from '../../assets/gallery/gallery2.jpg'
import gallery3 from '../../assets/gallery/gallery3.jpg'
import gallery4 from '../../assets/gallery/gallery4.jpg'
import gallery5 from '../../assets/gallery/gallery5.jpg'
import gallery6 from '../../assets/gallery/gallery6.jpg'
import gallery7 from '../../assets/gallery/gallery7.jpg'
import gallery8 from '../../assets/gallery/gallery8.jpg'
import gallery9 from '../../assets/gallery/gallery9.jpg'
import gallery10 from '../../assets/gallery/gallery10.jpg'

const Gallery = () => {
    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}
            className="py-6 dark:bg-gray-100 dark:text-gray-900 mt-24">
            <div className='space-y-4 mb-12'>
                <h1 className='text-center text-5xl'>Glimpses of Memorable Moments</h1>
                <p className="mt-2 text-center secondary-content max-w-5xl mx-auto">
                    "Beautiful moments from our various social events are captured here. In every picture, you'll find the joy of our gatherings and boundless enthusiasm. Come, let's flip through the pages of memory and glimpse some highlights from our events."
                </p>

            </div>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src={social_banner} alt="" className="w-full h-full object-cover col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                <img alt="" className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={road_clean} />
                <img alt="" className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={garbage_clean} />
                <img alt="" className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery3} />
                <img alt="" className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery4} />
                <img alt="" className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery5} />
                <img alt="" className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery6} />
                <img alt="" className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery9} />
                <img alt="" className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={gallery10} />
                <img src={gallery8} alt="" className="w-full h-full object-cover col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
            </div>
        </motion.section>
    );
};

export default Gallery;