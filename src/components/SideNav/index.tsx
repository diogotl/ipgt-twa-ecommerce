import { Box, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { VscRepo,VscAccount } from "react-icons/vsc";
import { SideNavLink } from "./SideNavLink";
import { SideNavSection } from "./SideNavSection";


export function SideNav() {
    return (

        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <SideNavSection title="GESTÃO">
                    <SideNavLink icon={VscAccount} to="/dashboard/users">Utilizadores</SideNavLink>
                    <SideNavLink icon={VscRepo} to="/dashboard/products">Produtos</SideNavLink>
                </SideNavSection>
            </Stack >
        </Box>
    )
}