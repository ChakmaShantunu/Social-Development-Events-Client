import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import { ToastContainer } from 'react-toastify';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        loading,
        createUser,
        signInUser
    }
    return <div>
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
        <ToastContainer></ToastContainer>
    </div>;
};

export default AuthProvider;