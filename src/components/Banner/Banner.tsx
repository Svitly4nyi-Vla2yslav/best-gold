import React from 'react';
import { BannerContainer, BannerText, ImageBanner } from './Banner.styled';
import goldBanner from "../../assets/image/Slide_Goldmix.webp"



const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerText>
        Sell your gold today at the best price!
      </BannerText>
      <ImageBanner src={goldBanner}/>
    </BannerContainer>
  );
};

export default Banner;
