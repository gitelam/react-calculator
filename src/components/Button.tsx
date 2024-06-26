import React from "react";

export function Button({ input_value }: { input_value: any }){

  if(input_value === "DEL")
  {
    return(
      <button className="delete-button">
        {input_value}
      </button>
    );
  }

  function handleClick(value : any = "null"){
    console.log("Clicked: ", value);
  }

  return(
    <button onClick={ ()=> handleClick({input_value})}>
      {input_value}
    </button>
  );

}