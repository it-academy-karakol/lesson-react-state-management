import React from 'react';
import Nav from './Nav';
import Theme from './Theme';

const Toolbar = ({ theme, user, changeThemeHandler }) => {
  const style = {
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    transition: 'all .3s ease'
  };

  return (
    <nav style={style}>
      <Nav color={theme.textColor} />
      <Theme changeThemeHandler={changeThemeHandler} />
      {user}
    </nav>
  );
}

export default Toolbar;