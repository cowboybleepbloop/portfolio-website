import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, HamburgerMenu, NavMenu, NavItem, NavLinks} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
            
                    <NavLogo to='/'>logo</NavLogo>
                    <HamburgerMenu>
                        <FaBars />
                    </HamburgerMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About Me</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;


