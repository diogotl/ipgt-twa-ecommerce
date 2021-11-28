import { Box, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { SideNavLink } from "./SideNavLink";
import { SideNavSection } from "./SideNavSection";


export function SideNav() {
    return (

        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <SideNavSection title="GERAL">
                    <SideNavLink icon={RiDashboardLine} to="/store">Dashboard</SideNavLink>
                    <SideNavLink icon={RiContactsLine} to="/dashboard">Usuários</SideNavLink>
                </SideNavSection>

                <SideNavSection title="GERAL">
                    <SideNavLink icon={RiInputMethodLine} to="/formularios">Formulários</SideNavLink>
                    <SideNavLink icon={RiGitMergeLine} to="/automacao">Automação</SideNavLink>
                </SideNavSection>
            </Stack >
        </Box>
    )
}