import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
      setLoading(false);
      return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        userSignIn
    }

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}
