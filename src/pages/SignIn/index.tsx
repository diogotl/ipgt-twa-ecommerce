import { FormEvent, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';
import styles from './SignIn.module.css';

export function SignIn() {

    const { signIn, isAuth } = useContext(AuthContext)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    let navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate('/dashboard')
        }
    }, [isAuth])

    async function handleSubmit(event: FormEvent) {

        event.preventDefault()

        const data = {
            username,
            password
        }

        await signIn(data)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <input placeholder="username" type="username" value={username} onChange={e => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Submeter</button>
        </form>
    )
}