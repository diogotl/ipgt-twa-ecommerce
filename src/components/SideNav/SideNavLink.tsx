import { Icon, Text, Link, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface SideNavLink extends LinkProps {
    icon: ElementType;
    to: string;
    children: string;
}


export function SideNavLink({ icon, to, children, ...rest }: SideNavLink) {
    return (
        <ActiveLink to={to}>
            <Link display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </Link>
        </ActiveLink>

    )
}