import React from 'react';
import Nav from './Nav';
import Theme from './Theme';
import User from './User';

function Toolbar(props) {
  return (
    <nav>
      <Nav />
      <Theme />
      <User />
    </nav>
  );
}

export default Toolbar;