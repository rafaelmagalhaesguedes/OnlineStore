import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';
import { Home } from './pages/Home';

function App() {
  return (
    <CartProvider>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  )
}

export default App;
