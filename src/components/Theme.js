import React from 'react';

function Theme(props) {
  return (
    <>
      <button onClick={_ => props.changeThemeHandler('dark')} >Dark</button>
      <button onClick={_ => props.changeThemeHandler('light')}>Light</button>
    </>
  );
}

export default Theme;