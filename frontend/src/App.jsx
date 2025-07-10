import {BrowserRouter, Routes, Route} from 'react-router-dom'

// IMPORTING COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold">Hello World</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
