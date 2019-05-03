import React from 'react';

function User(props) {
  return (
    <span>
      <img src={props.user.picture} alt="" />
      {props.user.name}
    </span>
  );
}

export default User;