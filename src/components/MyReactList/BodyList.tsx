import React from 'react';
import { Icon } from '@iconify/react';


import AddButton from './AddButton';
import List from './List';
import ListItem from './ListItem';

export default function BodyList(){

  return <div className="card-log">

    <AddButton/>

    <ListItem/>

  </div>;

}
