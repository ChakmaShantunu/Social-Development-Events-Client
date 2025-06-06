import React, { use, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import DatePicker from 'react-datepicker';
import { object } from 'framer-motion/client';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddEvent = () => {

    const navigate = useNavigate();

    const { user } = use(AuthContext);

    const [startDate, setStartDate] = useState(new Date());

    const handleAddEvent = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newEvent = Object.fromEntries(formData.entries());

        newEvent.eventDate = startDate.toISOString();
        console.log(newEvent);

        axios.post('http://localhost:3000/events', newEvent)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your event added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    navigate('/upcomingEvents');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className='md:p-6'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl'>Add new event</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddEvent}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="Enter event name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label font-semibold">Category</label>
                        <select name="category" id="" className='select border' required>
                            <option disabled selected>Choose a category</option>
                            <option value="Cleanup">Clean-up Campaign</option>
                            <option value="Plantation">Tree Plantation</option>
                            <option value="Donation">Blood Donation</option>
                            <option value="Health">Health Camp</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Description</label>
                        <textarea name="description" id="" className='textarea textarea-border w-full'></textarea>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Event Date</label>
                        {/* <input type="date" name='eventDate' className="input w-full" placeholder="Enter coffee taste" /> */}
                        <DatePicker className='px-4 py-3 border border-gray-300 rounded' minDate={new Date()} selected={startDate} onChange={(date) => setStartDate(date)} />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Image</label>
                        <input type="url" name='thumbnailUrl' className="input w-full" placeholder="Enter Event Image" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Location</label>
                        <input type="text" name='location' className="input w-full" placeholder="Enter Event Location" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Max Participants</label>
                        <input type="text" name='maxParticipants' className="input w-full" placeholder="Enter Max Participants" />
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
                <input type="submit" className='btn w-full mt-12' value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddEvent;