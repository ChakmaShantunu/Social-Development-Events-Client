
import EventsStat from './EventsStat';
import EventsList from './EventsList';
import { Suspense, use } from 'react';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import { myJoinedEventsPromise } from '../../api/joinedEventsApi';
import Loading from '../../components/Loader/Loading';



const JoinedEvents = () => {

    const { user } = use(AuthContext);

    return (
        <div>
            <EventsStat></EventsStat>
            <Suspense fallback={<Loading></Loading>}>
                <EventsList myJoinedEventsPromise={myJoinedEventsPromise(user.email)}></EventsList>
            </Suspense>
        </div>
    );
};

export default JoinedEvents;