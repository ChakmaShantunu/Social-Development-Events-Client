import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import { ToastContainer } from 'react-toastify';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                currentUser.reload().then(() => {
                    setUser({
                        uid: currentUser.uid,
                        email: currentUser.email,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    })
                    setLoading(false)
                })
            } else {
                setUser(null)
                setLoading(false)
            }
            console.log(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        updateUser
    }
    return <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        <ToastContainer></ToastContainer>
    </div>;
};

export default AuthProvider;