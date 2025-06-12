import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router';
import registerLottie from '../../assets/lotties/registerLottie.json'
import registerLottie2 from '../../assets/lotties/registerLottie2.json'
import registerbg from '../../assets/Register/register-bg.jpg'
import { easeInOut, motion } from "motion/react"
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import Swal from 'sweetalert2';
import SocialLogIn from '../Shared/SocialLogIn';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const Register = () => {

    const navigate = useNavigate();
    const { createUser, updateUser, setUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (regex.test(password)) {
            alert("valid password")
        }
        else {
            alert("Password must contain at least one capital letter, one smaller and a number")
        }

        if (!name || !email || !password) {
            alert("Please fill in all fields")
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters")
            return;
        }

        //create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                    toast.success('Registered Successfully');
                    navigate('/');
                })
                    .catch(error => {
                        console.log(error);
                        setUser(user);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between mx-auto'>
            <div className='mt-3 md:-rotate-35'>
                <Lottie animationData={registerLottie2} loop={true}></Lottie>
            </div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: easeInOut, type: 'spring', stiffness: 80, damping: 10 }}
                className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl my-12 bg-cover bg-center" style={{ backgroundImage: `url(${registerbg})` }}>
                <h3 className="text-2xl font-bold text-center pt-8 text-black">Create an Account!</h3>
                <p className='text-xs text-center mt-2 text-black'>Join now to streamline your experience from day one</p>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset space-y-2 py-4">
                        <label className="label text-black">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        <label className="label text-black">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label text-black">Photo-URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo-URL" />
                        <label className="label text-black">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} className="btn btn-neutral mt-4">Register</motion.button>
                    </form>
                    <SocialLogIn></SocialLogIn>
                    <p>Already have an account? Please <Link
                        className='underline' to='/signin'>Login</Link></p>
                </div>
            </motion.div>
            <div>
                <Lottie animationData={registerLottie} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Register;