import { createContext } from "react";

interface IAuthContextValue {
    isLoggedIn: boolean;
}

export const AuthContext = createContext({});

export function AuthProvider({children}: {children: React.ReactNode}) {
    return (
        <AuthContext.Provider value={{ isLoggedIn: false }}>
            {children}
        </AuthContext.Provider>
    );
}