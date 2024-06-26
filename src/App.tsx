import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Icon } from '@iconify/react';

const currentOperationStyle = {
  fontSize: "0.9rem",
  color: "white",
  display: "flex",
  align: "left",
  justify: "between"

};



let operations = [
  {operation: "23 + 41", result: 1675},
  {operation: "24 + 34", result: 1675},
  {operation: "345 + 42", result: 11675},

];


//set array with button values
let buttons = [7, 8, 9, "DEL", 4, 5, 6, "/", 1, 2, 3, "*", 0, ".", "+", "-"];




let result = 0;
let operation = "";
$: operation = "";


function App() {
  return (
    <div className="App">


      <header className="App-header">

        <div className="calc-container flex">

        <div className="card flex-col">

            <Header />
            <Display str={operation}/>
            <Pad/>


        </div>

        <div className="card-log">

          <div className="flex justify-start">

            <Icon icon="material-symbols:history" />
            <h6>History</h6>

          </div>


          <div className="logs-container">
            <Log />
          </div>

        </div>
        </div>
      </header>

    </div>


  );
}

function Print() {
  operation += "X";
  console.log(operation);
  return(
    <div>
      {operation}
    </div>
  );
}


function Log(){

  return(

    <div className="gap-1 flex-col rounded-scrollbar">

    {operations.map(operation =>

    <div className="block-log">
        <div className="previous-operation">
          {operation.operation}
        </div>

        <div  className="current-operation">

          <h6>
            =
          </h6>

          <div>
            {operation.result}
          </div>

        </div>

    </div>

    )
    }

    </div>

  );

}

function Header(){

    return(
      <div className="header-container">

        <div className="logo-header">
          <Icon icon="logos:react" />
          <div className="logo-name">
            <h5>R</h5>
            <h6>calculator</h6>
          </div>
        </div>

      </div>
    );


}

function Pad() {
  return(
    <div className="pad">
      {buttons.map(button =><Button input_value={button} />)}
    </div>
  );
}

function Button({ input_value }: { input_value: any }){

  if(input_value === "DEL")
  {
    return(
      <button className="delete-button">
        {input_value}
      </button>
    );
  }

  return(
    <button>
      {input_value}
    </button>
  );

}





function Display({ str }: { str: any }){

  str += "1";

  return(
    <div  className="display">

      <div className="previous-operation">
        {str}
      </div>


      <div className="current-operation">
        <h6>
          =
        </h6>

        <div>
          {str}
        </div>
      </div>

    </div>
  );

}

export default App;
