import CitySelector from '../../components/CitySelector/CitySelector';
import Footer from '../../components/Footer/Footer';
import GoldPriceTable from '../../components/GoldPriceTable/GoldPriceTable';
import Header from '../../components/Header/Header';
import MetalChart from '../../components/MetalChart/MetalChart';
import { HomeContainer } from './HomePage.styled';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <main>
        <CitySelector onCityChange={function (): void {
          throw new Error('Function not implemented.');
        } } />
        <GoldPriceTable />
        <MetalChart />
      </main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
