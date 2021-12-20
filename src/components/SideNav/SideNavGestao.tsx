import { VscAccount, VscRepo } from "react-icons/vsc";
import { SideNav } from "./index";
import { SideNavLink } from "./SideNavLink";
import { SideNavSection } from "./SideNavSection";

export function SideNavGestao() {
    return (
        <SideNav>
            <SideNavSection title="GESTÃO">
                <SideNavLink icon={VscAccount} to="/dashboard/users">Utilizadores</SideNavLink>
                <SideNavLink icon={VscRepo} to="/dashboard/products">Produtos</SideNavLink>
            </SideNavSection>
        </SideNav>
    )
}