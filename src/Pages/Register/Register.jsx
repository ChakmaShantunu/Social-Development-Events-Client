import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import registerLottie from '../../assets/lotties/registerLottie.json'
import registerLottie2 from '../../assets/lotties/registerLottie2.json'

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photoUrl, password)
    }
    return (
        <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between mx-auto'>
            <div className='-rotate-35'>
                <Lottie animationData={registerLottie2} loop={true}></Lottie>
            </div>
            <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl my-12">
                <h3 className="text-2xl font-bold text-center pt-8">Create an Account!</h3>
                <p className='text-xs text-center mt-2 text-gray-300'>Join now to streamline your experience from day one</p>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset space-y-2 py-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Photo-URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo-URL" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Register</button>
                        <div className="divider">OR</div>
                        <button className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </form>
                    <p>Already have an account? Please <Link className='underline' to='/log-in'>Login</Link></p>
                </div>
            </div>
            <div>
                <Lottie animationData={registerLottie} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Register;