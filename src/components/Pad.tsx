import React  from 'react';
import  {Button}  from "./Button";

interface PadProps {
  setExpression: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
}

let buttons = ["7", "8", "9", "+", "4", "5", "6", "/", "1", "2", "3", "*", "DEL", "0", ".", "-"];

let there_is_operator = false;

function isOperator(input: string) {
  const operators = new Set(["+", "-", "*", "/"]);
  return operators.has(input);
}
function isNumericDigit(input:string) {
  return !isNaN(Number(input)) && input.trim() !== '';
}

function canAppendPeriod(expression:string) {
  const lastSegment = expression.split(/[\+\-\*\/]/).pop();
  return isNumericDigit(expression.slice(-1)) && !lastSegment?.includes('.');
}
function isLastCharNumber(expression:string) {
  const lastChar = expression.slice(-1);
  return !isNaN(parseInt(lastChar, 10));
}
let result = 0;
let number = 0;

let number_string = "";

export default function Pad({setExpression, setResult}: PadProps) {

  function handleClick(input: string) {
    setExpression((prev) => {
      if (input === "DEL") {
        return prev.slice(0, -1);
      } else if (isOperator(input)) {
        // Prevent appending an operator if the last character is a period
        if (prev.slice(-1) !== '.') {
          return isLastCharNumber(prev) ? prev + input : prev.slice(0, -1) + input;
        }
        return prev; // Return the expression as is if the last character is a period
      } else if (input === '.' && canAppendPeriod(prev)) {
        // Append a period only if it's valid to do so
        return prev + input;
      } else if (input !== '.' || isNumericDigit(prev.slice(-1))) {
        // Append input if it's not a period or if the last character is a digit
        return prev + input;
      }
      return prev; // In all other cases, return the expression as is
    });
  }

  function makeOperation(input: any){
    console.log(input);
    //if input is a number
    if(!isNaN(input))
    {
      //concat number
      number_string += input;
      //convert
      number = parseFloat(number_string);

      console.log(number);
    }

    //if is an operator
    if(isOperator(input))
    {
      //if there is an operator
      if(there_is_operator)
      {
        //calculate
        result = calculate(result, number, input) ;
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



    setResult(result);


  }

  //calculate
  function calculate (result: number, number: number, operator: string){
    switch(operator){
      case "+":
        return result + number;
      case "-":
        return result - number;
      case "*":
        return result * number;
      case "/":
        return result / number;
      default:
        return 0;
    }
  }


  return(
    <div className="pad">
      {buttons.map( (button, index) => <Button key={index} onClick={()=>{handleClick(button)}} input_value={button} />)}
    </div>
  );

}
