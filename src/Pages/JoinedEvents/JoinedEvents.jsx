
import EventsStat from './EventsStat';
import EventsList from './EventsList';
import { Suspense, use } from 'react';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import { myJoinedEventsPromise } from '../../api/joinedEventsApi';
import Loading from '../../components/Loader/Loading';
import { AnimatePresence, motion } from "motion/react"



const JoinedEvents = () => {

    const { user } = use(AuthContext);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
            viewport={{ once: true, amount: 0.2 }}>
            {/* <EventsStat></EventsStat> */}
            <Suspense fallback={<Loading></Loading>}>
                <EventsList myJoinedEventsPromise={myJoinedEventsPromise(user.email)}></EventsList>
            </Suspense>
        </motion.div>
    );
};

export default JoinedEvents;