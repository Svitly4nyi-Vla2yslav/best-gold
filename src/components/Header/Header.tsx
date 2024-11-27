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

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 549px)' });

  return (
    <NavbarContainer>
      <Logo to="/">GoldBuy</Logo>
      <NavList>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <>
            <NavItem>
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
            </NavItem>
          </>
        )}
      </NavList>
    </NavbarContainer>
  );
};

export default Header;
