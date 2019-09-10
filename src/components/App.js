import React from 'react';
import logo from '../logo.svg';
import './App.scss';
import './HomeHeader';
import HomeHeader from './HomeHeader';
import FooterHeader from './HomeFooter';


function App() {
  return (
    <div className="App">
      <HomeHeader></HomeHeader>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FooterHeader></FooterHeader>
    </div>
  );
}

export default App;
