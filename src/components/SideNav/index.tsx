import { Box, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SideNavProps {
    children: ReactNode;
}

export function SideNav({ children }: SideNavProps) {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                {children}
            </Stack >
        </Box>
    )
}