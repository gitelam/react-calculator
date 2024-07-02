//add all
//
import React from 'react';
import { Icon } from '@iconify/react';

export default function NewItemModal(){
  return   <dialog id='myModal'>

    <form>
      <label>Item Name</label>
      <input type='text' id='name' name='name' required></input>
      <label>Item Description</label>
      <input type='text' id='description' name='description' required></input>
      <label>Item Price</label>
      <input type='number' id='price' name='price' required></input>
      <label>Item Quantity</label>
      <input type='number' id='quantity' name='quantity' required></input>
      <button type='submit'>Add</button>
    </form>


  </dialog>;
}