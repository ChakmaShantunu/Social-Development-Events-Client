import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import axios from 'axios';
import { title } from 'framer-motion/client';

const JoinEvent = () => {

    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const { user } = use(AuthContext);
    console.log(id, user);

    useEffect(() => {
        axios.get(`http://localhost:3000/eventdetails/${id}`)
            .then(res => {
                console.log(res.data);
                setEvent(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [id])

    const handleJoinFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTask = Object.fromEntries(formData.entries());
        console.log(newTask);

        // const regex = /^(01)[3-9]\d{8}$/;

        const participant = {
            ...newTask,
            applicant: user.email,
            eventId: id,
            eventTitle: event.title,
            eventDate: event.eventDate,
            joinedData: new Date(),
        }

        console.log(participant);

        // send db the info

        axios.post('http://localhost:3000/participants', participant)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className='my-24'>
            <h3 className="text-3xl mb-6">Apply for this job: <Link to={`/eventDetails/${id}`}>Details</Link></h3>
            <form onSubmit={handleJoinFormSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Phone No.</label>
                        <input type="tel" name='phone' className="input w-full" placeholder='01xxxxxxxxx' pattern="^(01)[3-9]\d{8}$" required />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label font-semibold">Why do you want to join?</label>
                        <select name="category" id="" className='select border' required>
                            <option value="" disabled>Select your reason</option>
                            <option value="Web Development">To gain knowledge and experience</option>
                            <option value="Design">To network with others</option>
                            <option value="Writing">To contribute to the cause</option>
                            <option value="Marketing">Interested in the topic</option>
                            <option value="Marketing">Recommended by a friend</option>
                            <option value="Marketing">Others</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Address</label>
                        <input type="text" name='address' className="input w-full" placeholder="Enter Your Address" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Your Skills or Interested Role</label>
                        <textarea name="skills" id="" className='textarea textarea-border w-full'></textarea>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Linkedin Link</label>
                        <input type="url" name='linkedin' className="input w-full" placeholder="Enter profile link" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Name</label>
                        <input type="text" name='name' className="input w-full" defaultValue={user?.displayName} placeholder="Enter coffee details" readOnly />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Email</label>
                        <input type="email" name='email' className="input w-full" defaultValue={user?.email} placeholder="Enter coffee details" readOnly />
                    </fieldset>
                </div>
                <input type="submit" className='btn w-full mt-12' value="Join" />
            </form>
        </div>
    );
};

export default JoinEvent;