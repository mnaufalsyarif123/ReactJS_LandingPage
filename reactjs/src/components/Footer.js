import React from "react";
import { StyledFooter, FooterContent, Logo, Rights } from './StyledFooter';

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContent>
                <Logo src="https://indigospacesdk.semarangkota.go.id//cc-content/themes/cicool/asset/img/logokomplit.png" alt="DISKOMINFO SEMARANG" />
                <Rights>&copy; 2024 IndigoSpace-SDK. All rights reserved.</Rights>
            </FooterContent>
        </StyledFooter>
    );
}

export default Footer;
