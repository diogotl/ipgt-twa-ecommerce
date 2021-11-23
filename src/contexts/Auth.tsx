import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    user: any
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState('')
    const [isAuth, setIsAuth] = useState(false)

    let navigate = useNavigate();

    useEffect(() => {

        async function loadUser() {
            const username = localStorage.getItem('@Username')
            const token = localStorage.getItem('@Token')

            if (token && username) {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setUser(username)
                setIsAuth(true)
            }
        }
        loadUser()
    }, [])
    

    async function signIn({ username, password }: SignInData) {

        try {

            const response = await api.post('/conta/login', {
                username,
                password
            })

            const { token } = response.data;

            setUser(username)
            console.log(user + 'aqui')

            localStorage.setItem('@Username', username)
            localStorage.setItem('@Token', token)

            api.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

            setIsAuth(true)

            return

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