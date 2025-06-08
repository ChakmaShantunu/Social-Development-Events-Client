import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateEvent = () => {

    const navigate = useNavigate();

    const { user } = use(AuthContext);

    const [startDate, setStartDate] = useState(new Date());
    const { _id } = useLoaderData();
    console.log(_id);

    const handleUpdateEvent = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedEvent = Object.fromEntries(formData.entries());

        updatedEvent.eventDate = startDate.toISOString();
        console.log(updatedEvent);

        fetch(`${import.meta.env.VITE_API_URL}/created-events/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        // position: "top-center",
                        icon: "success",
                        title: "Your task updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/manageEvents')

                }
                console.log('after updating the data', data)
            })

        // axios.put(`http://localhost:3000/events/${_id}`, updatedEvent)
        //     .then(res => {
        //         console.log(res.data);
        //         if (res.data.insertedId) {
        //             Swal.fire({
        //                 position: "center",
        //                 icon: "success",
        //                 title: "Your updated event successfully",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //             form.reset();
        //             navigate('/manageEvents');
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }
    return (
        <div className='md:p-6'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl'>Add update event</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateEvent}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base-content font-semibold">Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="Enter event name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label font-semibold">Category</label>
                        <select name="eventType" id="" className='select border' required>
                            <option value="" disabled>Choose a category</option>
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
                <input type="submit" className='btn w-full mt-12' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateEvent;