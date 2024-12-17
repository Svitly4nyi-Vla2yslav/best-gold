import React from 'react';
import { FooterContainer, FooterText } from './Footer.styled';
import { Logo } from '../Header/Header.styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2024{' '}
        <Logo style={{fontSize: 15}}
          to="/"
          className="animate__delay-1s animate__animated animate__fadeInDown"
        >
          Prix de l'or
        </Logo>
        . All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
