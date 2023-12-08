import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './TutorialShoppingCart/Pages/Home';
import Store from './TutorialShoppingCart/Pages/Store';
import About from './TutorialShoppingCart/Pages/About';
import Navbar from './TutorialShoppingCart/Components/Navbar';
import './App.css';
// import Main from './TutorialShoppingCart/Main';
import { ShoppingCartProvider } from './TutorialShoppingCart/Context/ShoppingCartContext';
import Project from './Project/NewProject';
// import Main from './TutorialHangman/Main'
// import Main from './TutorialFCC/Main';
import ACar from './Types/Car';
import ToDoApp from './TutorialToDo/Main';
import Container from './Types/Container';
import Animal from './Types/Animal';
import MyFunction from './Types/some';
import MyFunction2 from './Types/Some2';
import Transaction from './Types/Transactions';
import Types from './Types/Types';
// 
function App() {
  
  return (
    <div >
      <>
        {/* <ToDoApp /> */}
        {/* {Container()} */}
        {Animal()}
        {MyFunction()}
        {/* {MyFunction2()} */}
        {/* {ACar()} */}
        {/* {Transaction()} */}
        {/* {Types()} */}
      </>
    </div>
  );
}

export default App;

{/*  */}

// <Main />

//  <Project />

{/* <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </ShoppingCartProvider> */}


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