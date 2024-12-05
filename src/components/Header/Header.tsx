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
import EmailIcon from '@mui/icons-material/Email';

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <NavbarContainer>
      <Logo
        to="/"
        className="animate__delay-1s animate__animated animate__fadeInDown"
      >
        Prix de l'or
      </Logo> {isMobile! ? (<NavItem  className="animate__delay-2s animate__animated animate__fadeInDown">
        <a href="mailto:example@email.com"><EmailIcon/></a>
      </NavItem>) : (<NavItem  className="animate__delay-2s animate__animated animate__fadeInDown">
        <a href="mailto:e.a.shakaryan@gmail.com"><EmailIcon/> e.a.shakaryan@gmail.com</a>
      </NavItem>) }
      
      <NavList>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <>
            <Fade direction="down" cascade>
              <NavItem>
                <StyledNavLink to="/home">Accueil</StyledNavLink>
              </NavItem>
              {/* <NavItem>
                <StyledNavLink to="/details">Détails</StyledNavLink>
              </NavItem> */}
              <NavItem>
                <StyledNavLink to="/about">À propos</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/partners">Partenaires</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
              </NavItem>
            </Fade>
          </>
        )}
      </NavList>
    </NavbarContainer>
  );
};

export default Header;
