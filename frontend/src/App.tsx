import { Route, Routes } from 'react-router-dom';
import { Success } from './pages/Success/Success';
import { Cancel } from './pages/Cancel/Cancel';
import { Home } from './pages/Home/Home';
import { Layout } from './components/Layout';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Route>
    </Routes>
  );
}

export default App;
