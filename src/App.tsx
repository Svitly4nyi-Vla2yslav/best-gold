import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Container from './components/Container/Container';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Partners from './pages/Partners/Partners';
import Details from './pages/Details/Details';

export const App: React.FC = () => {
  return (
    <Container>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="details" element={<Details />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
};
