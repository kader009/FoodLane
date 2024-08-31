import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, Setloading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = async (email, password) => {
    Setloading(true);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    Setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const github = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    return signOut(auth).then(() => SetUser(null));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (Currentuser) => {
      SetUser(Currentuser);
      Setloading(false);
      if (Currentuser) {
        console.log(Currentuser);
      } else {
        Setloading(false);
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    signIn,
    google,
    github,
    loading,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
