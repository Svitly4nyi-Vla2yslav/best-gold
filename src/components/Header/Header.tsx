import React from 'react';
import {
  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import 'animate.css';
import { Fade } from 'react-awesome-reveal';

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 549px)' });

  return (
    <NavbarContainer>
      <Logo
        to="/"
        className="animate__delay-1s animate__animated animate__fadeInDown"
      >
        GoldBuy
      </Logo>
      <NavList>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <><Fade direction='down' cascade>
            <NavItem >
              <StyledNavLink to="/home">Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/details">Details</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/about">About</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/partners">Partners</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/contact">Contact</StyledNavLink>
            </NavItem></Fade>
          </>
        )}
      </NavList>
    </NavbarContainer>
  );
};

export default Header;
