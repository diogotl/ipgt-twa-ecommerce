import { Flex, Select, Input, HStack } from "@chakra-ui/react"

interface FilterProps{

}

export function Filter() {

    return (
        <Flex w="100%" my="10" maxW="1280px" mx="auto" px="10" bgColor="gray.800" padding="2rem" borderRadius="xl">
            <HStack spacing={8} flexDirection="row" alignItems="flex-end">
                <Input as="input" colorScheme="teal" placeholder='Basic usage' />
                <Select as="select" colorScheme="teal" placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>

            </HStack>
        </Flex>
    )

}