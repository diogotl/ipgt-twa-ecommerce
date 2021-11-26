import { Grid, Heading } from "@chakra-ui/layout";
import { Flex, Text } from "@chakra-ui/react";

import { useState } from "react";
import { Logo } from "../../components/Logo";

export function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')




    return (
        <Grid
            height="100vh"
            templateColumns="1fr 480px 480px 1fr"
            templateRows="1fr 480px 1fr"
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
            >
                <Logo />
                <Heading mt={20} size="xl" as="h2">
                    WELCOME BACK, UP TO <Text as='span' color='pink.500' ml='1'>30</Text>% OFF!
                    <Text>
                        sdssdaasd
                    </Text>
                </Heading>
            </Flex>
            <Flex
                gridArea="form"
                h="100%"
                bgColor="gray.400"
                borderRadius="2xl"
                flexDir="column"
                alignItems="stretch"
                padding={16}
            >

            </Flex>
        </Grid>
    )
}