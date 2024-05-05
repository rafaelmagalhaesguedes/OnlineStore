import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from 'react-bootstrap';
import { Success } from "./pages/Success";
import { Cancel } from "./pages/Cancel";
import { Home } from "./pages/Home";

function App() {

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      
      </BrowserRouter>
    </Container>
  )
}

export default App
