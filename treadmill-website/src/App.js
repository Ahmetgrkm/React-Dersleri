// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import TreadmillInfo from './components/TreadmillInfo';
import ClinicInfo from './components/ClinicInfo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cards from './components/Cards';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <TreadmillInfo />
        <hr></hr>
        <ClinicInfo />
        <hr></hr>
        <Cards />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;