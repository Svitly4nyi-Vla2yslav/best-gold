import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/HomePage/HomePage';
import Container from './components/Container/Container';

export const App: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};
