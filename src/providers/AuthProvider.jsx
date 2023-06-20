import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email ,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email ,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const logOut = () =>{
        setLoading(true);
         signOut(auth);
    }

    // google sign in 

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }


    // check user have or not with firebase
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth , loggedUser => {
            console.log('Logged in user', loggedUser);
            setUser(loggedUser);
            setLoading(false);
            
        })

        return () =>{
            unSubscriber();
        }
    }, [])
    

    const authInfo = {
        user,
        createUser,
        signIn, 
        logOut,
        googleSignIn,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;