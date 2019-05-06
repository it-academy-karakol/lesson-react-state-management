import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  const style = {
    color: props.color
  }

  return (
    <ul>
      <li><NavLink style={style} to="/" exact>State example</NavLink></li>
      <li><NavLink style={style} to="/context-example">Context example</NavLink></li>
      <li><NavLink style={style} to="/reducer-example">Reducer example</NavLink></li>
      <li><NavLink style={style} to="/redux-example">Redux example</NavLink></li>
    </ul>
  );
}

export default Nav;