import React from "react";


export default function Display({expression, result}: { expression: string; result: number;}){

  console.log(expression);

  return(
    <div  className="display">

      <div className="previous-operation">
        {/* {pad_input.expression} */}
        {expression}
      </div>


      <div className="current-operation">
        <h6>
          =
        </h6>

        <div>
          {/* {pad_input.result} */}
          {result}
        </div>
      </div>

    </div>
  );

}