import React from 'react';
import { BannerContainer, BannerText } from './Banner.styled';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerText>
        Sell your gold today at the best price!
      </BannerText>
    </BannerContainer>
  );
};

export default Banner;
