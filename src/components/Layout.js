import React from 'react';
import Toolbar from './Toolbar';

function Layout(props) {
  return (
    <div>
      <Toolbar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;