import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Icon } from '@iconify/react';

import Calculator from "./components/Calculator";

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <div className="calc-container flex">

          <Calculator  />

        <div className="card-log">

          <div className="flex justify-start">

            <Icon icon="material-symbols:history" />
            <h6>History</h6>

          </div>


          <div className="logs-container">
            {/* <Log /> */}
          </div>

        </div>
        </div>
      </header>

    </div>


  );
}





export default App;
