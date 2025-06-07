import { div } from 'framer-motion/client';
import React, { use } from 'react';
import { format } from 'date-fns';

const EventsList = ({ myJoinedEventsPromise }) => {

    const events = use(myJoinedEventsPromise);
    return (
        <div>
            <div className='my-6'>
                {
                    events.length === 0 ?
                        (<p className='text-3xl text-center mt-12 font-bold'>No event found. You have not joined any event yet.</p>) :
                        (<div>
                            <div className="hidden lg:block overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>
                                                No.
                                            </th>
                                            <th>Name & Email</th>
                                            <th>Event Title</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Event Date</th>
                                            <th>Join Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            events.map((event, index) => <tr key={event._id} className='hover:bg-gray-100 hover:text-black transition duration-300 cursor-pointer'>
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div>
                                                            <div className="font-bold">{event.name}</div>
                                                            <div className="text-sm opacity-50">{event.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {event.eventTitle}
                                                </td>
                                                <td>
                                                    {event.phone}
                                                    <br />
                                                    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                                </td>
                                                {/* <td>
                                                    <button className="btn hover:bg-green-200"><FaGavel size={20} /></button>
                                                </td> */}
                                                <td>
                                                    {event.address}
                                                </td>
                                                <td>
                                                    {format(new Date(event.eventDate), 'MMMM dd, yy')}
                                                </td>
                                                <td>
                                                    {format(new Date(event.joinedData), 'MMMM dd, yy')}
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div className='lg:hidden grid gap-4 mt-5'>
                                {
                                    events.map((event, index) => (
                                        <div key={event._id} className="bg-base-100 p-4 rounded-lg shadow-xl/15 space-y-2 border-2 border-gray-600">
                                            <h3 className="text-lg font-bold my-6">{event.title}</h3>
                                            <p><span className="font-semibold">Name:</span> {event.name}</p>
                                            <p><span className="font-semibold">Email:</span> {event.email}</p>
                                            <p><span className="font-semibold">Phone:</span> {event.phone}</p>
                                            <p><span className="font-semibold">Event Date:</span> {event.eventDate}</p>
                                            <p><span className="font-semibold">Joined Date:</span> ${event.joinedData}</p>
                                            {/* <div className="flex justify-between items-center mt-6">
                                                <button className="btn hover:bg-green-200"><FaGavel size={20} /></button>
                                                <Link to={`/updateTask/${task._id}`}>
                                                    <button className="btn hover:bg-blue-200"><MdOutlineSystemUpdateAlt size={20} /></button>
                                                </Link>
                                                <button onClick={() => handleDelete(task._id)} className="btn hover:bg-red-200"><MdDelete size={20} /></button>
                                            </div> */}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default EventsList;