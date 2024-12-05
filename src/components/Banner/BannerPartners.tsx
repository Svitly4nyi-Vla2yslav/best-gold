import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import {
  AboutContainerBanner,
  BannerTitel,
  ImageBanner,
} from './Banner.styled';
import partners from "../../assets/image/partners.jpg"

const BannerPartners: React.FC = () => {
  return (
    <Zoom direction="up" duration={1000}>
      <AboutContainerBanner>
        <BannerTitel> Partenaires </BannerTitel>
        <ImageBanner src={partners}  />
      </AboutContainerBanner>
    </Zoom>
  );
};

export default BannerPartners;
