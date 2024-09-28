import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import NotFound from './components/NotFound';
import FormData from './pages/FormData';
import BuinessPage from './pages/Buiness-page';
import Confirm from './pages/Confirm';
import UploadImages from './pages/UploadImages';
import FinalComponent from './components/Final';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/1007484836378392943029489' element={<FormData />} />
          <Route path='/1007484836378392943029489/buiness' element={<BuinessPage />} />
          <Route path='/1007484836378392943029489/confirm' element={<Confirm />} />
          <Route path='/1007484836378392943029489/upload-image' element={<UploadImages />} />
          <Route path='/1007484836378392943029489/final' element={<FinalComponent />} />




          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;