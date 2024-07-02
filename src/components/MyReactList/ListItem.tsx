import React from 'react';
import DeleteButton from './DeleteButton';
import ReadyButton from './ReadyButton';
export default function List(){

  return <>
  <div className="list-item">
    Item
    <div className="actions flex">
      <DeleteButton/>
      <ReadyButton/>
    </div>
  </div>

  </>;

}