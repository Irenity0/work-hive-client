import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = async () => {
        setLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error logging out:", error);
        } finally {
            setLoading(false);  
        }
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(`state captured:`, currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    })

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;