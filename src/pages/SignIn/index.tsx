import { FormLabel } from '@chakra-ui/react';
import { FormEvent, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';
import { Flex, Button, Stack, FormControl } from '@chakra-ui/react'

import { Input } from '../../components/Form/Input';


export function SignIn() {

    const { signIn, isAuth } = useContext(AuthContext)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    useEffect(() => {

        if (isAuth) {
            navigate('/store')
        } else {
            navigate('/')
        }

    }, [isAuth])

    async function handleSubmit(event: FormEvent) {

        event.preventDefault()

        const data = {
            username,
            password
        }

        console.log(data)

        await signIn(data)

        return (
            <Link to="/store"></Link>
        )
    }

    return (
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Flex as="form" w="100%" maxWidth={360} bgColor="gray.300" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit}>
                <Stack spacing="4">
                    <Input name="username" label="Username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    {/* <FormControl>
                        <FormLabel htmlFor="email">Username</FormLabel>
                        <Input name="email" id="email" type="text" focusBorderColor="blue" bg="gray.700" value={username} onChange={e => setUsername(e.target.value)} />

                    </FormControl> */}
                    <FormControl>
                        <FormLabel htmlFor="password">Password </FormLabel>
                        <Input name="password" id="password" type="password" focusBorderColor="blue" bg="gray.700" value={password} onChange={e => setPassword(e.target.value)} />
                    </FormControl>
                    <Button type="submit" mt="6" colorScheme="blue" >Login</Button>
                </Stack>
            </Flex>
        </Flex>
    )
}