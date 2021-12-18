import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

type User = {
    username: string
}

interface SignInData {
    username: string;
    password: string;
}

interface SignUpData {
    nome: string;
    username: string;
    password: string;
}

interface AuthContextData {
    signUp(data: SignUpData): Promise<void>
    signIn(data: SignInData): Promise<void>
    isAuth: boolean;
    user: any
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState('')
    const [isAuth, setIsAuth] = useState(false)

    const navigate = useNavigate();

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

            localStorage.setItem('@Username', username)
            localStorage.setItem('@Token', token)

            api.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

            setIsAuth(true)


        } catch (error) {
            toast.error('Combinação username/password errada')
        }
    }

    async function signUp({ nome, username, password }: SignUpData) {

        try {

            const response = await api.post('/conta/registar', {
                nome,
                username,
                password
            })

            toast.success('Conta registada, vai ser rederecionado em 5 segundos')
            
            setTimeout(function(){
                navigate('/')
            }, 5000);

        } catch (error) {
            toast.error('A sua conta já está registada')
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, signUp, isAuth, user }}>
            {children}
        </AuthContext.Provider>
    )
}