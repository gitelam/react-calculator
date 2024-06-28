import React  from 'react';
import  {Button}  from "./Button";
import exp from 'constants';

interface PadProps {
  setExpression: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
}

let buttons = ["7", "8", "9", "+", "4", "5", "6", "/", "1", "2", "3", "*", "DEL", "0", ".", "-"];

let there_is_operator = false;

function isOperator(input: string){
  return input === "+" || input === "-" || input === "*" || input === "/";
}

function isDelete(input: string){ return input === "DEL"; }

let result = 0;
let number = 0;

let number_string = "";

export default function Pad({setExpression, setResult}: PadProps) {

  function handleClick(input: string){


    if(isOperator(input))
    {

        if(there_is_operator)
        {
          setExpression((prev) => prev.slice(0, -1) + input);
          return;
        }

        there_is_operator = true;
        setExpression((prev) => prev + input);
        return;
    }

    if(isDelete(input))
    {
        setExpression((prev) => prev.slice(0, -1));
        return;
    }

      setExpression((prev) => prev + input);


      makeOperation(input);

  }

  function makeOperation(input: any){

    //if input is a number
    if(!isNaN(input))
    {
      //concat number
      number_string += input;
      //convert
      number = parseFloat(number_string);
      return;
    }

    //if is an operator
    if(isOperator(input))
    {
      //if there is an operator
      if(there_is_operator)
      {
        //calculate
        // result = calculate(result, number, input);
        //reset number
        number = 0;
        number_string = "";
        return;
      }
      //if there is no operator
      result = number;
      number = 0;
      number_string = "";
      return;
    }


  }

  //calculate
  function calculate(result: number, number: number, operator: string){
    switch(operator){
      case "+":
        return result + number;
      case "-":
        return result - number;
      case "*":
        return result * number;
      case "/":
        return result / number;
    }
  }


  return(
    <div className="pad">
      {buttons.map( (button, index) => <Button key={index} onClick={()=>{handleClick(button)}} input_value={button} />)}
    </div>
  );

}
