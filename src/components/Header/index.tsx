import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart, } from 'react-icons/hi';
import { RiAdminLine } from 'react-icons/ri';

import { Logo } from '../Logo';
import { Avatar, Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { ActiveLink } from '../ActiveLink';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';

export function Header() {

  const { user } = useContext(AuthContext)

  return (
    <Flex as="header" w="100%" h="4rem" mt="2rem" mx="auto" px="6" align="center" maxWidth={1280}>
      <Link to="/">
        <Logo />
      </Link>

      <Flex
        ml="auto"
        align="center"
      >
        <HStack spacing="1rem">
          <ActiveLink to="/dashboard" children={<Icon fontSize="20" as={RiAdminLine} />} />
          <ActiveLink to="/checkout" children={<Icon fontSize="20" as={HiOutlineShoppingCart} />} />
        </HStack>

        <Flex align='center' ml="3rem">

          <Box
            mr="1rem"
            textAlign='right'
          >
            <Text fontSize="lg" fontWeight="bold">Bem-vindo,</Text>
            <Text color='teal.300' fontSize="md">
              {user}
            </Text>
          </Box>
          <Avatar colorScheme="teal" size='md' name={user} />
        </Flex>

      </Flex>

    </Flex>
  );
};
