import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, ReactNode } from "react"

const AuthContext = createContext({});

function register(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
}

export function AuthProvider({ children }: { children: ReactNode }) {
    return <AuthContext.Provider value={{ register }}>{children}</AuthContext.Provider>
}
