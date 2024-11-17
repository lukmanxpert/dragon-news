import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext(null);
const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            return () => {
                unsubscribe()
            }
        })
    },[])
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () => {
        signOut(auth)
    }
    const value = {
        user,
        setUser,
        signUpUser,
        userSignOut,
        signInUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
export default Context;