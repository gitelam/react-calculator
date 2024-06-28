//import react
import React from 'react';

import Display from './Display';
import Header from './Header';
import Pad from './Pad';


export default function Calculator(){

  const [expression, setExpression] = React.useState("");
  const [result, setResult] = React.useState(0);


  return(
    <div className="card flex-col">
        <Header />
        <Display expression={expression} result={result}/>
        <Pad setExpression={setExpression}/>
    </div>
  );

}