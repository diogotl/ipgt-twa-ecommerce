import { Icon, Text, Link, LinkProps } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { ActiveLink } from "../ActiveLink";

interface SideNavLinkProps extends LinkProps {
    icon: ElementType;
    to: string;
    children: ReactNode;
}

export function SideNavLink({ icon, to, children, ...rest }: SideNavLinkProps) {
    return (
        <ActiveLink to={to}>
            <Link display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </Link>
        </ActiveLink>

    )
}