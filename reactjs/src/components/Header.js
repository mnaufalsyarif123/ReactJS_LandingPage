import React, { Component } from "react";
import { NavStyle, UlStyle, AStyle, LogoStyle } from "./StyledHeader";

class Header extends Component {
    render() {
        return (
            <NavStyle className="navbar">
                <LogoStyle src="https://indigospacesdk.semarangkota.go.id/uploads/badge/20231106094659-2023-11-06badge094652.png" alt="Logo" />
                <UlStyle>
                    <li><AStyle href="#home">Beranda</AStyle></li>
                    <li><AStyle href="#about">Tentang Kami</AStyle></li>
                    <li><AStyle href="#ruangan">Ruangan</AStyle></li>
                    <li><AStyle href="#komunitas">Komunitas</AStyle></li>
                    <li><AStyle href="#alamat">Alamat</AStyle></li>
                    {/* <li><AStyle href="#faq">FAQ</AStyle></li> */}
                </UlStyle>
            </NavStyle>
        );
    }
}

export default Header;
