import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import { Header } from './components/Header';
import { Container } from 'react-bootstrap';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';
import { Home } from './pages/Home';

function App() {
  return (
    <CartProvider>
      <Container fluid>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
