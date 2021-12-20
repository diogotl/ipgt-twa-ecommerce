import { SideNav } from "./index";
import { SideNavLink } from "./SideNavLink";
import { SideNavSection } from "./SideNavSection";

import { VscAccount, VscRepo } from "react-icons/vsc";

export function SideNavEncomenda() {
    return (
        <SideNav>
            <SideNavSection title="Encomenda">
                <SideNavLink icon={VscAccount} to="/checkout/cart">Carrinho</SideNavLink>
                <SideNavLink icon={VscRepo} to="/checkout/orders">Encomendas</SideNavLink>
            </SideNavSection>
        </SideNav>
    )
}