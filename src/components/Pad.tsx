import React  from 'react';
import  {Button}  from "./Button";
import exp from 'constants';

interface PadProps {
  setExpression: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
}

let buttons = ["7", "8", "9", "+", "4", "5", "6", "/", "1", "2", "3", "*", "DEL", "0", ".", "-"];

let there_is_operator = false;
let there_is_period = false;
var num = "";

function isOperator(input: string): boolean
{
  return input === "+" || input === "-" || input === "*" || input === "/";
}

export default function Pad({setExpression, setResult}: PadProps) {

  function handleClick(input: string) {

    if(isOperator(input)){
      if(there_is_operator){
        return;
      }
      there_is_operator = true;
      there_is_period = false;
      makeOperation(input);
    }else{
      there_is_operator = false;
      if(input === "."){
        if(there_is_period){
          return;
        }
        there_is_period = true;
      }else{
        if(input === "DEL"){
          setExpression((prev) => {
            return prev.slice(0, prev.length - 1);
          });
          return;
      }else{
        makeOperation(input);
      }
    }
  }

    setExpression((prev) => {
      if(isOperator(input) && prev==""){
            return prev;
        }
        return prev + input;
    });

  }



  function makeOperation(input: string){

    //if input is a number
    if(!isOperator(input)){
      num += input;
      return;
    }


    let numA = Number(num);

    if(isOperator(input)){
      console.log(input);
    }


    setResult(numA);
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
