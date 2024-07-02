import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Icon } from '@iconify/react';

import Calculator from "./components/Calculator";
import List from "./components/MyReactList/List";

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <div className="calc-container flex">

          {/* <Calculator  /> */}
          <List />

        </div>
      </header>

    </div>


  );
}


export default App;
