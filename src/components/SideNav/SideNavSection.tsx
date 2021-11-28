import { Box, Stack, Link, Icon, Text } from "@chakra-ui/react"
import React, { ReactNode } from "react"

interface SideNavSectionProps {
    title: string;
    children: ReactNode
}

export function SideNavSection({ title, children }: SideNavSectionProps) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}