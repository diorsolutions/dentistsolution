import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './modules/navbar/navbar';
import Home from './pages/Home';
import Services from './Components/services/services';
import Contact from './Components/contact/contact';
import Footer from './modules/footer/footer';
// >>>>>>> d641eedb6d2de0f8cc14d229c56743350dfc99ff


// til
import './i18n'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Components/contact/contact" element={<Contact />} />
        <Route path="/Components/services/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;