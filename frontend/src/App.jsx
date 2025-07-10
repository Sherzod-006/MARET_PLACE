import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="text-3xl font-bold">Hello World</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
