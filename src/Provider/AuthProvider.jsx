import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { Children, createContext, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    

    const createUser = (email, password) =>{        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{       
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;