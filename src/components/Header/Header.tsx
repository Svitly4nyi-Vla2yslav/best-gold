import React from 'react';
import { 

  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink
} from './Header.styled';


const Header: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo to="/">GoldBuy</Logo>
      <NavList>
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
      </NavList>
    </NavbarContainer>
  )
}

export default Header
