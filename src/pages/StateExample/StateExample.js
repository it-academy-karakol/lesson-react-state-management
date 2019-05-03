import React, { useState } from 'react';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import Content from '../../components/Content';
import User from '../../components/User';

function StateExample() {
  // User state
  const [user, setUser] = useState({
    name: "Bakyt",
    picture: "/pictures/logo.svg"
  });

  // Component composition example.
  const userElement = <User user={user} />;

  // Theme state
  const [theme, setTheme] = useState({
    name: "dark",
    backgroundColor: `rgba(0, 0, 0, 1)`,
    textColor: `rgba(255, 255, 255, 1)`
  });

  const changeTheme = name => {
    switch (name) {
      case 'dark':
        setTheme({
          name,
          backgroundColor: `rgba(0, 0, 0, 1)`,
          textColor: `rgba(255, 255, 255, 1)`
        });
        return;
      case 'light':
        setTheme({
          name,
          backgroundColor: `rgba(255, 255, 255, 1)`,
          textColor: `rgba(0, 0, 0, 1)`
        });
        return;
      default:
        return;
    }
  }

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

export default StateExample;