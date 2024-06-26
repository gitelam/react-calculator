import React from "react";
import {Icon} from "@iconify/react";


export default function Header(){

  return(
    <div className="header-container">

      <div className="logo-header">
        <Icon icon="logos:react" />
        <div className="logo-name">
          <h5>R</h5>
          <h6>calculator</h6>
        </div>
      </div>

    </div>
  );


}
