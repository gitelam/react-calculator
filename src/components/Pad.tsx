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
let result: string = "0";
let number = "0";

function isOperator(input: string): boolean
{
  return input === "+" || input === "-" || input === "*" || input === "/";
}

let res = 0;
let operator = "";
let another_string = "";
let the_number = "";

export default function Pad({setExpression, setResult}: PadProps) {

  function handleClick(input: string) {

    console.log(input);

    if(isOperator(input)){
      if(there_is_operator){
        return;
      }
      if(there_is_period){
        return;
        }else{
          there_is_period = false;
        }

        there_is_operator = true;

        operator = input;

        res = calculate(result, number, input);
        result = res.toString();
        number = "";

        another_string = result + operator;

        setResult(res);

    }else{
      there_is_operator = false;
      if(input === "."){
        if(there_is_period){
          return;
        }
        there_is_period = true;
        number += input;
      }else{
        if(input === "DEL"){
          setExpression((prev) => {
            return prev.slice(0, prev.length - 1);
          });
          return;
      }else{

        the_number = input;
        there_is_period = false;
        number += input;

      }
    }
  }

    setExpression((prev) => {
        if(isOperator(input) && prev == ""){
            return prev;
        }
        prev = another_string;
        return prev + number;
    });

  }



  //calculate
  function calculate (result: string, number_p: string, operator: string): number{
    switch(operator){
      case "+":
        return parseFloat(result) + parseFloat(number_p);
      case "-":
        return parseFloat(result) - parseFloat(number_p);
      case "*":
        return parseFloat(result) * parseFloat(number_p);
      case "/":
        if(result === "0"){
          result = "1";};
        return parseFloat(number_p)/parseFloat(result)  ;
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
