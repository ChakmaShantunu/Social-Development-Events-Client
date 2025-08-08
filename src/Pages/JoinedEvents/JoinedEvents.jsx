
import EventsStat from './EventsStat';
import EventsList from './EventsList';
import { Suspense, use, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import Loading from '../../components/Loader/Loading';
import { AnimatePresence, motion } from "motion/react"



const JoinedEvents = () => {

    const { user } = useContext(AuthContext);
    console.log(user.accessToken);


    console.log(user.email);
    console.log(user.displayName);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}>
            <Suspense fallback={<Loading></Loading>}>
                {/* <EventsList myJoinedEventsPromise={myJoinedEventsPromise(user.email, user.accessToken)}></EventsList> */}
                <EventsList email={user.email} accessToken={user.accessToken}></EventsList>
            </Suspense>
        </motion.div>
    );
};

export default JoinedEvents;