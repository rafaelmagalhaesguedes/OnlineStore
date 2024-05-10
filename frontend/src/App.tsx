import { Route, Routes } from 'react-router-dom';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';
import { Home } from './pages/Home/Home';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Route>
    </Routes>
  );
}

export default App;
