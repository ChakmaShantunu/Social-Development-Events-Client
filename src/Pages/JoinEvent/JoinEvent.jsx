import React, { use } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';

const JoinEvent = () => {

    const { id: eventId } = useParams();
    const { user } = use(AuthContext);
    console.log(eventId, user);

    const handleJoinFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTask = Object.fromEntries(formData.entries());
        console.log(newTask);

        // const regex = /^(01)[3-9]\d{8}$/;


        // const application = {
        //     eventId,
        //     applicant: user.email,
        //     linkedin,
        //     github,
        //     resume
        // }
    }


    return (
        <div className='my-24'>
            <h3 className="text-3xl mb-6">Apply for this job: <Link to={`/eventDetails/${eventId}`}>Details</Link></h3>
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
                        <label className="label text-base-content font-semibold">Budget</label>
                        <input type="text" name='budget' className="input w-full" placeholder="Enter coffee price" />
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