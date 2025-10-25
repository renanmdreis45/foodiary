import { createContext } from "react";

interface IAuthContextValue {
    isLoggedIn: boolean;
}

export const AuthContext = createContext({});