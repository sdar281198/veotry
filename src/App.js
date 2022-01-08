import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Elements  from './components/Content/Elements';
import Why from './components/Content/Why';
import Phone from './components/Content/Phone';
import Footer from './components/Footer/Footer';
import Nosotros from './components/Nosotros/Nosotros';
import Swiper from './components/Content/Swiper';
import SwiperUs from './components/Nosotros/SwiperUs';
import Dashboard from './components/Dashboard/Dashboard';
import SwiperDash from './components/Dashboard/SwiperDash';
import Contact from './components/Contact/Contact';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<><Elements/> 
                                      <Why/>
                                      <Swiper/>
                                      <Phone></Phone> </> }/>
          <Route path="/nosotros" element={<>
                                          <Nosotros/>
                                          <SwiperUs/>
                                          </>}/>
          <Route path="/dashboard" element={<>
                                            <Dashboard/>
                                            <SwiperDash/>
                                            </>}/>
          <Route path="/contacto" element={<>
                                          <Contact/>
                                          </>}/>
        </Routes>
        <Footer/>
    </div>
    </Router>
  );
}


export default App;
