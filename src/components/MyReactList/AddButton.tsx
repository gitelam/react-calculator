import React from 'react';
import {Icon} from '@iconify/react';

import AddItemModal from './AddItemModal';

export default function AddButton(){

  return <div>
    <button onClick={()=>showModal("myModal")}>
    <>add+</>
  </button>
  <AddItemModal />
  </div>;
}

//function that show div dialog
function showModal(modalName: string){
  var dialog = document.getElementById(modalName);
  if(dialog){
    dialog.style.display = 'block';
  }
}
