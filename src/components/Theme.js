import React from 'react';

function Theme(props) {
  return (
    <>
      <button onClick={_ => props.changeThemeHandler('dark')} >Dark</button>
      <button onClick={_ => props.changeThemeHandler('light')}>Light</button>
      <button onClick={_ => props.changeThemeHandler('random')}>Random</button>
    </>
  );
}

export default Theme;