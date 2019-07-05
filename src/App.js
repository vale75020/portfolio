import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navigation logoTitle="My Portfolio"/>
      <Header title="Valentino Suma" button="SHOW SKILLS" />
      <About />
      <Services />
    </div>
  );
}

export default App;
