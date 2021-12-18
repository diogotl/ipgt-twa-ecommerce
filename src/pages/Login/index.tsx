import { FormEvent, useContext, useEffect, useState } from "react";

import { Divider, Grid, Heading, Link } from "@chakra-ui/layout";
import { Flex, Text, Stack, FormLabel, FormControl, Button } from "@chakra-ui/react";

import { Input } from '../../components/Form/Input'
import { toast } from "react-toastify";

import { AuthContext } from "../../contexts/Auth";

import { Logo } from "../../components/Logo";
import { useNavigate } from "react-router";

export function Login() {

    const { signIn, isAuth } = useContext(AuthContext)

    const navigate = useNavigate();

    useEffect(() => {

        if (isAuth) {
            navigate('/store')
        } else {
            navigate('/')
        }

    }, [isAuth])


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(event: FormEvent) {

        event.preventDefault()

        const data = {
            username,
            password
        }

        await signIn(data).then(()=> navigate('/store', { replace: true }))

    }

    return (
        <Grid
            height="100vh"
            templateColumns="1fr 460px 460px 1fr"
            templateRows="1fr 460px 1fr"
            templateAreas="
                '. . . .'
                '. logo form .'
                '. . . .'
            "
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                gridArea="logo"
                alignItems="flex-start"
                h="60%"
                mr="2.2rem"
            >
                <Logo />
                <Heading mt={24} size="xl" as="div">
                    WELCOME BACK, UP TO <Text as='span' color='teal.300' ml='1'>30</Text>% OFF<Text as='span' color='teal.300' ml='1'>!</Text>
                </Heading>
            </Flex>
            <Flex
                as="form"
                gridArea="form"
                h="100%"
                bgColor="gray.800"
                borderRadius="lg"
                flexDir="column"
                alignItems="stretch"
                padding="4rem"
                onSubmit={handleLogin}
            >
                <Stack spacing="1.4rem">
                    <Input name="username" label="Username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    {/* <FormControl>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input
                            size="lg"
                            id="username"
                            name="username"
                            variant="filled"
                            bgColor="gray.900"
                            focusBorderColor="teal.300"
                            borderRadius="md"
                            _hover={{
                                bgColor: "gray.900"
                            }}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </FormControl> */}
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            size="lg"
                            id="password"
                            name="password"
                            type="password"
                            variant="filled"
                            bgColor="gray.900"
                            focusBorderColor="teal.300"
                            borderRadius="md"
                            _hover={{
                                bgColor: "gray.900"
                            }}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormControl>
                </Stack>
                <Button size="lg" type="submit" mt="2rem" color="gray.900" bgColor="teal.400">Login</Button>
                <Divider marginY="1.2rem" variant="dashed" />
                <Text>Ainda não é cliente? <Link to="/dashboard" color="teal.400" fontWeight="bold">Registre-se</Link></Text>
            </Flex>
        </Grid>
    )
}