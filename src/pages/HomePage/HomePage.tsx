import { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import CitySelector from '../../components/CitySelector/CitySelector';
import ClientForm from '../../components/ContactForm/ClientForm';
import GoldPriceTable from '../../components/GoldPriceTable/GoldPriceTable';
import HeroComponent from '../../components/HeroComponent/HeroComponent';
import InteractiveMap from '../../components/InteractiveMap/InteractiveMap';
import { Section, Title } from '../AboutUs/AboutUs.styled';
import {
  HomeContainer,
  MainWrapper,
  MapWrapper,
  TableContainer,
} from './HomePage.styled';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <HomeContainer>
      <main>
        <Banner />
        <MainWrapper>
          <TableContainer>
            <CitySelector />
            <GoldPriceTable />
          </TableContainer>
          <MapWrapper>
            <HeroComponent />
            <Section>
              <ClientForm />
            </Section>
            <Section>
              {' '}
              <Title>Our Gold and Silver Buyback Locations</Title>
              <InteractiveMap />
            </Section>
          </MapWrapper>
        </MainWrapper>
      </main>
    </HomeContainer>
  );
};

export default Home;
