import styled from 'styled-components';

export const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 100px;
    background-color: #fff7f9;
    width: 100%;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export const UlStyle = styled.ul`
    list-style: none;
    display: flex;
    gap: 5px;
    margin: 0;
    padding: 0;
`;

export const AStyle = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 0.9rem;
    font-weight: 600;
    transition: color 0.3s ease-out;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
        color: #fff;
        background-color: #DC3545;
    }
`;

export const LogoStyle = styled.img`
    height: 40px;
    width: auto;
    transition: transform 0.3s ease-out;

    &:hover {
        transform: rotate(10deg);
    }
`;
