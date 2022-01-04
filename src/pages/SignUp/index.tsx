import { useState, FormEvent, useContext } from "react";
import { Button, Flex, FormControl, FormLabel, Grid, Heading, Input, Stack, Text } from "@chakra-ui/react";

import { toast } from "react-toastify";

import { Logo } from "../../components/Logo";
import { AuthContext } from "../../contexts/Auth";

export function SignUp() {

    const [nome, setNome] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const { signUp } = useContext(AuthContext)

    function enableSignUpButton() {
        return nome.length > 0 && username.length > 0 && password.length > 0;
    }

    async function handleSignUp(event: FormEvent) {

        event.preventDefault()

        if (password !== passwordConfirmation) {
            toast.error('As passwords têm de coincidir')
            return
        }

        const data = {
            nome,
            username,
            password,
        }

        await signUp(data)
    }

    return (
        <Grid
            height="100vh"
            templateColumns="1fr 450px 2rem 450px 1fr"
            templateRows="1fr 1fr 1fr"
            templateAreas="
                '. . . . .'
                '. form . logo .'
                '. . . . .'
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
                onSubmit={handleSignUp}
            >
                <Heading mb="2rem">Crie a sua conta</Heading>
                <Stack spacing="1rem">
                    <FormControl>
                        <FormLabel htmlFor="username">Nome</FormLabel>
                        <Input
                            size="lg"
                            id="nome"
                            name="nome"
                            variant="filled"
                            bgColor="gray.900"
                            focusBorderColor="teal.300"
                            borderRadius="md"
                            _hover={{
                                bgColor: "gray.900"
                            }}
                            onChange={e => setNome(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
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
                    </FormControl>
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
                    <FormControl>
                        <FormLabel htmlFor="passwordConfirmation">Repite a sua password</FormLabel>
                        <Input
                            size="lg"
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            type="password"
                            variant="filled"
                            bgColor="gray.900"
                            focusBorderColor="teal.300"
                            borderRadius="md"
                            _hover={{
                                bgColor: "gray.900"
                            }}
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </FormControl>
                </Stack>
                <Button size="lg" type="submit" mt="2rem" color="gray.900" bgColor="teal.400" disabled={!enableSignUpButton()}>Registar</Button>
            </Flex>
        </Grid>
    )
}