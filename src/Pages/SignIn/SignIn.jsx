import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import signinbg from '../../assets/Signin/signin-bg.jpg'
import Lottie from 'lottie-react';
import signinLottie from '../../assets/lotties/signinlottie.json'
import signinLottie2 from '../../assets/lotties/signinlottie2.json'
import { easeInOut, motion } from "motion/react"
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import { toast } from 'react-toastify';
import SocialLogIn from '../Shared/SocialLogIn';

const SignIn = () => {



    const { signInUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';


    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //sign in user

        signInUser(email, password)
            .then(result => {
                const currentUser = result.user;
                console.log(currentUser);
                currentUser.reload().then(() => {
                    console.log(currentUser.displayName, currentUser.photoURL);
                    toast.success("Sign in Successful");
                    navigate(from);
                })


            })
            .catch(error => {
                console.log(error);
                if (error.code === "auth/invalid-credential") {
                    toast.error("You have entered email or wrong password")
                } else if (error.code === "auth/user-not-found") {
                    toast.error("User not found")
                } else {
                    toast.error("Login Error:" + error.message)
                }
            })

    }

    return (
        <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center mx-auto'>
            <div>
                <Lottie className='max-w-xl' animationData={signinLottie} loop={true}></Lottie>
            </div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl my-12 outline-1 bg-cover bg-center" style={{ backgroundImage: `url(${signinbg})` }}>
                <h3 className="text-2xl font-bold text-center pt-8">Sign in now!</h3>
                <div className="card-body">
                    <form onSubmit={handleSignIn} className="fieldset space-y-2 py-4">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><button className="link link-hover">Forgot password?</button></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p>New to this website? Please <Link className='underline' to='/register'>Register</Link></p>
                    <SocialLogIn from={from}></SocialLogIn>
                </div>
            </motion.div>
            <div>
                <Lottie animationData={signinLottie2} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default SignIn;