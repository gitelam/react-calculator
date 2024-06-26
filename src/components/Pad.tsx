import React  from 'react';

import  {Button}  from "./Button";

export default function Pad() {


  let buttons = [7, 8, 9, "+", 4, 5, 6, "/", 1, 2, 3, "*", "DEL",0,".", "-"];

  return(
    <div className="pad">
      {buttons.map(button =><Button input_value={button} />)}
    </div>
  );

}
