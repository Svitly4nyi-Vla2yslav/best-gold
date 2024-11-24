import Banner from '../../components/Banner/Banner';
import { BannerText } from '../../components/Banner/Banner.styled';
import CitySelector from '../../components/CitySelector/CitySelector';
import GoldPriceTable from '../../components/GoldPriceTable/GoldPriceTable';
import InteractiveMap from '../../components/InteractiveMap/InteractiveMap';
import MetalChart from '../../components/MetalChart/MetalChart';
import { HomeContainer, MainWrapper, MapWrapper, TableContainer } from './HomePage.styled';

const Home: React.FC = () => {
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
            <BannerText>Our Gold and Silver Buyback Locations</BannerText>
            <InteractiveMap />
            <MetalChart />
          </MapWrapper>
        </MainWrapper>
      </main>
    </HomeContainer>
  );
};

export default Home;
