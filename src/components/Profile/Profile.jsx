import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="rounded avatar w-12 cursor-pointer">
                    <img
                        src={user?.photoURL}
                        alt="Tailwind-CSS-Avatar-component"
                        className='w-12 h-12 object-cover rounded'
                    />
                </div>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-base-100 rounded-box z-10 mt-2 w-52 p-2 shadow-sm">
                    <li>
                        <Link>Create Events</Link>
                    </li>
                    <li>
                        <Link>Manage Events</Link>
                    </li>
                    <li>
                        {/* <Link to={`/jobApply/${user.id}`}>Applied Jobs</Link> */}
                        <Link to='/joinEvent'>Applied Events</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;