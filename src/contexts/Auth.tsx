import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
    username: string
}

type SignInData = {
    username: string;
    password: string;
}

type AuthContextData = {
    signIn(data: SignInData): Promise<void>
    isAuth: boolean;
    user: User
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState({} as User)
    const [isAuth, setIsAuth] = useState(false)

    // useEffect(() => {
    //     const token = localStorage.getItem('@Token')

    //     api.get('/produto')

    // }, [])

    async function signIn({ username, password }: SignInData) {

        try {

            const response = await api.post('/conta/login', {
                username,
                password
            })

            const { token } = response.data;

            setUser({ username })

            setIsAuth(true)

            localStorage.setItem('@Token', token)
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`


        } catch (error) {
            console.log(error)
        }

    }


    return (
        <AuthContext.Provider value={{ signIn, isAuth, user }}>
            {children}
        </AuthContext.Provider>
    )
}