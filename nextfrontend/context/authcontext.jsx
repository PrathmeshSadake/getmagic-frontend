import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("Yo!!");
  const [loading, setLoading] = useState(false) //setting a state here for avoiding some random screen showing up for even a split session as we are loading the firebase functions

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          user: user.email,
          displayName: user.displayName,
        });
      } else setUser(null);
    });

    return () => unsubscribe();
  }, []);
  
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, signup, signin, signout }}>{loading ? null : children}</AuthContext.Provider>
  );
};
