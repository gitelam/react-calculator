import React from "react";


interface ButtonProps {
  input_value: string;
  onClick: () => void;
}

let is_operator = false;

export function Button({ input_value, onClick }: ButtonProps){

  if(input_value === "DEL")
  {
    return(
      <button onClick={onClick} className="delete-button">
        {input_value}
      </button>
    );
  }

  return(
    <button onClick={onClick}>
      {input_value}
    </button>
  );

}