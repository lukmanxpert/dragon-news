import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext(null);
const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(loading, user);
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
            return () => {
                unsubscribe()
            }
        })
    },[])
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () => {
        setLoading(true)
        signOut(auth)
    }
    const value = {
        user,
        setUser,
        signUpUser,
        userSignOut,
        signInUser,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
export default Context;