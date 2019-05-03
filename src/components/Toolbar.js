import React from 'react';
import Nav from './Nav';
import Theme from './Theme';

const Toolbar = ({ theme, user, changeThemeHandler }) => {
  const style = {
    backgroundColor: theme.backgroundColor,
    color: theme.textColor
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