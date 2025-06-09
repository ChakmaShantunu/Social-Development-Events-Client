import React, { Suspense, use } from 'react';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import MyPostedEvents from './MyPostedEvents';
import { myPostedEvents } from '../../api/postedEventsApi';
import Loading from '../../components/Loader/Loading';

const ManageEvents = () => {

    const { user } = use(AuthContext);

    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <MyPostedEvents myPostedEvents={myPostedEvents(user.email, user.accessToken)}></MyPostedEvents>
            </Suspense>
        </div>
    );
};

export default ManageEvents;