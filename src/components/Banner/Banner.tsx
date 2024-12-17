import React, { useEffect, useRef } from 'react';
import { BannerContainerHero, ImageBanner } from './Banner.styled';
import goldBanner from '../../assets/image/Slide_Goldmix.webp';
import 'animate.css';
// import { Zoom } from 'react-awesome-reveal';
import PriceTable from '../GoldPriceTable/GoldPriceTable';

const Banner: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const clone = scrollRef.current.cloneNode(true);
      scrollRef.current.appendChild(clone);
    }
  }, []);

  return (
    <>
      <BannerContainerHero>
        <ImageBanner src={goldBanner} />{' '}
        <div className="price-table-container">
          <PriceTable />
          <PriceTable />
        </div>
      </BannerContainerHero>
    </>
  );
};

export default Banner;
