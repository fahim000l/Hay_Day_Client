import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';
import { resolveTo } from '@remix-run/router';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleProvicer = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvicer);
    };
    const fbSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, fbProvider);
    };
    const gitSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, gitProvider);
    };
    const setProfile = (profile) => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile);
    };
    const resetPassword = (email) => {
        setLoader(true);
        return sendPasswordResetEmail(auth, email);
    }

    const authInfo = {
        user,
        signUp,
        signIn,
        googleSignIn,
        fbSignIn,
        gitSignIn,
        setProfile,
        resetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;