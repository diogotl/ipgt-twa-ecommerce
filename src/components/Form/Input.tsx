import { FormControl, FormLabel, Input as InputCustom, InputProps as ChakraInputs } from "@chakra-ui/react";

interface InputProps extends ChakraInputs {
    label?: string
    name: string
}

export function Input({ label, name, ...rest }: InputProps) {
    return (
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <InputCustom
                name={name}
                id={name}
                type="text"
                variant="filled"
                borderRadius="md"
                bgColor="gray.900"
                focusBorderColor="teal.300"
                bg="gray.700"
                _hover={{
                    bgColor: "gray.900"
                }}
                {...rest}
            />
        </FormControl>
    )
}