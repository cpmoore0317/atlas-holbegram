import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, ReactNode, useContext } from "react"

const AuthContext = createContext({ register, logout });

type AuthContextType = {
    register: (email: string, password: string) => void
    logout: () => void
}

export const useAuth = () => useContext(AuthContext);

function register(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
}

function logout() {
    auth.signOut();
}

export function AuthProvider({ children }: { children: ReactNode }) {
    return <AuthContext.Provider value={{ register, logout }}>{children}</AuthContext.Provider>
}
