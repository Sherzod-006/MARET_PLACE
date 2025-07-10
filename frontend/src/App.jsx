import {BrowserRouter, Routes, Route} from 'react-router-dom'

// IMPORTING COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// IMPORTING PAGES
import Profile from './pages/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
