import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <ul>
      <li><NavLink to="/" exact>State example</NavLink></li>
      <li><NavLink to="/context-example">Context example</NavLink></li>
      <li><NavLink to="/reducer-example">Reducer example</NavLink></li>
      <li><NavLink to="/redux-example">Redux example</NavLink></li>
    </ul>
  );
}

export default Nav;