import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

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
    signOut(): void;
    isAuth: boolean;
    user: string
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
        const token = localStorage.getItem('@Token')
        const username = localStorage.getItem('@Username')

        if (token && username) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(username)
            setIsAuth(true)
        }
    }, [])

    async function signIn({ username, password }: SignInData) {

        try {

            const response = await api.post('/conta/login', {
                username,
                password
            })

            const { token } = response.data;
            
            localStorage.setItem('@Username', username)
            localStorage.setItem('@Token', token)
            api.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
            
            setUser(username)
            setIsAuth(true)
            
            navigate('/store')

        } catch (error) {
            toast.error('Combinação username/password errada')
        }
    }

    function signOut() {
        localStorage.removeItem('@Username')
        localStorage.removeItem('@Token')
        localStorage.removeItem('@Cart')

        api.defaults.headers.common = { 'Authorization': '' }

        setIsAuth(false)
        navigate('/')
    }

    async function signUp({ nome, username, password }: SignUpData) {

        try {

            await api.post('/conta/registar', {
                nome,
                username,
                password
            })

            toast.success('Conta registada, vai ser rederecionado em 5 segundos')

            setTimeout(function () {
                navigate('/')
            }, 5000);

        } catch (error) {
            toast.error('A sua conta já está registada')
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, signUp, signOut, isAuth, user }}>
            {children}
        </AuthContext.Provider>
    )
}