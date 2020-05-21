import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Products List</h1>
        <Products/>
      </header>
    </div>
  );
}

export default App;
