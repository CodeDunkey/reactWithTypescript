import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './TutorialShoppingCart/Pages/Home';
import Store from './TutorialShoppingCart/Pages/Store';
import About from './TutorialShoppingCart/Pages/About';
import Navbar from './TutorialShoppingCart/Components/Navbar';
import './App.css';
import Main from './TutorialShoppingCart/Main';
import { ShoppingCartProvider } from './TutorialShoppingCart/Context/ShoppingCartContext';

function App() {
  return (
    <div >
      <>
      <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </ShoppingCartProvider>
      </>
    </div>
  );
}

export default App;

// className="App"

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}