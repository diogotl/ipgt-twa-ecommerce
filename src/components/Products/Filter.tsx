import { Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, Flex, Stack, Select, Input } from "@chakra-ui/react"

export function Filter() {
    return (
        <Flex w="100%" my="10" maxW="1280px" mx="auto" px="10" >
            <Stack spacing={8} flexDirection="row">
                <Input as="input" display="inline" colorScheme="cyan" placeholder='Basic usage' />
                <Select as="select" display="inline" colorScheme="facebook" placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>

            </Stack>
        </Flex>
    )

}