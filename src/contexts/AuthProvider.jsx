import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
} from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const googleLogin = () => {
    //     return signInWithPopup(auth, provider)
    // }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('currentUser', currentUser.email);
            setUser(currentUser)
            if (currentUser) {
                const email = currentUser.email
                axios.post("https://test-server-ten-psi.vercel.app/api/v1/users/jwt", { email })
                    .then(data => {
                        // console.log(data.data)
                        localStorage.setItem("access-token", data.data.token)
                        setLoading(false)
                    })
            } else {
                localStorage.removeItem("access-token")
            }
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        loading,
        updateUserProfile,
        auth,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;