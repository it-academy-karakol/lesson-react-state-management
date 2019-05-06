import React, { useState, useReducer } from 'react';

import Hero from '../../components/Hero';
import User from '../../components/User';
import Layout from '../../components/Layout';
import Content from '../../components/Content';

import reducer from './themeReducer';

function ReducerExample(props) {
  // User state
  const [user, setUser] = useState({
    name: "Bakyt",
    picture: "/pictures/logo.svg"
  });

  // Component composition example.
  const userElement = <User user={user} />;

  // Use reducer
  const [theme, changeTheme] = useReducer(reducer, {
    // "store", state
    name: "dark",
    backgroundColor: `rgba(0, 0, 0, 1)`,
    textColor: `rgba(255, 255, 255, 1)`
  });

  return (
    <Layout user={userElement}
      theme={theme}
      changeThemeHandler={changeTheme}>
      <Hero theme={theme}>State example!</Hero>
      <Content theme={theme}>
        <p>Simple state example!</p>
      </Content>
    </Layout>
  );
}

export default ReducerExample;