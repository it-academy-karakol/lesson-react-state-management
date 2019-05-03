import React from 'react';

function Hero(props) {
  const style = {
    backgroundColor: props.theme.backgroundColor,
    color: props.theme.textColor
  };

  return (
    <header style={style} >{props.children}</header>
  );
}

export default Hero;