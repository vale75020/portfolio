import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation logoTitle="My Stylish Portfolio"/>
      <Header title="Valentino Suma" button="More" />
    </div>
  );
}

export default App;
