import React from 'react';

function Content(props) {
  return (
    <article>
      {props.children}
      <h4>You are using <u>{props.theme.name}</u> theme!</h4>
    </article>
  );
}

export default Content;