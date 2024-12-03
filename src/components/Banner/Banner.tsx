import React from 'react';
import { BannerContainer, BannerText, ImageBanner } from './Banner.styled';
import goldBanner from '../../assets/image/Slide_Goldmix.webp';
import 'animate.css';
import { Zoom } from 'react-awesome-reveal';

const Banner: React.FC = () => {
  return (
    <Zoom direction="down" duration={1000}>
      <BannerContainer>
        <BannerText>Vendez votre or aujourd'hui au meilleur prix !</BannerText>
        <ImageBanner src={goldBanner} />
      </BannerContainer>
    </Zoom>
  );
};

export default Banner;
