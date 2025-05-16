// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/pages/layout';
import MainPage from './Components/pages/main_home_page';
import Contact from './Components/pages/contact';
import Services from './Components/pages/services';
import '../src/Components/styles/index.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><MainPage /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;