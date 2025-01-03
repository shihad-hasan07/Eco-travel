import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.init";


export const authContext = createContext()

const AuthProvider = ({ routes }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const manageProfile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const handleLogOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoading(false)

            return () => {
                unsubscribe()
            }
        })
    }, [])
    const allContext = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogOut,
        manageProfile,
        user,
        setUser,
        loading,
        setLoading
    }


    return (
        <div>
            <authContext.Provider value={allContext}>{routes}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;