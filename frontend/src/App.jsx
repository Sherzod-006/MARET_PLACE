import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

// IMPORTING COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// IMPORTING PAGES
import Profile from './pages/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';



const App = () => {

  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
};

export default App;
