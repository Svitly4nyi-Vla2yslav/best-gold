import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { AboutContainerBanner,  BannerTitel, ImageBanner } from './Banner.styled';
import AboutImage from '../../assets/image/gold-price.jpeg';

const BannerAbout: React.FC = () => {
  return (
    <Zoom direction="up" duration={1000}>
      <AboutContainerBanner >
        <BannerTitel> À propos</BannerTitel>
        <ImageBanner src={AboutImage} />
      </AboutContainerBanner>
    </Zoom>
  );
};

export default BannerAbout;
