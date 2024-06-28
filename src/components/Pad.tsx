import React  from 'react';

import  {Button}  from "./Button";


interface PadProps {
  setExpression: React.Dispatch<React.SetStateAction<string>>;
}

let there_is_operator = false;

export default function Pad({setExpression}: PadProps) {

  let buttons = ["7", "8", "9", "+", "4", "5", "6", "/", "1", "2", "3", "*", "DEL", "0", ".", "-"];

  function handleClick(input: string){

    //if input is DEL
    if(input === "DEL")
    {
      setExpression((prev) => prev.slice(0, -1));
      return;
    }

    //if input is an operator
    if(input === "+" || input === "/" || input === "*" || input === "-")
    {
      if(there_is_operator)
      {
        setExpression(prev => prev.slice(0, -2) + input + " ");
        return;
      }
      there_is_operator = true;
      setExpression((prev) => prev + " " + input + " ");
      return;
    }

    there_is_operator = false;

    setExpression((prev) => prev + input);

  }

  return(
    <div className="pad">
      {buttons.map( (button, index) => <Button key={index} onClick={()=>{handleClick(button)}} input_value={button} />)}
    </div>
  );

}
