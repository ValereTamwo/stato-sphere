'use client';
import React, { createContext, useContext, useEffect ,useState} from 'react';
import {
  onAuthStateChanged,
  getAuth, 
} from 'firebase/auth';
import firebase_app from '../firebaseConfig';

const auth = getAuth(firebase_app);

interface AuthContextType {
  user: any; // Change the type to match your user object structure
}

export const AuthContext = createContext<AuthContextType>({ user: null });

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ( { children }: { children: React.ReactNode } ) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
