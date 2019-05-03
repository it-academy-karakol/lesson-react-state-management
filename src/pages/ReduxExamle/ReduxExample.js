import React from 'react';

import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import Content from '../../components/Content';


function ReduxExample(props) {
  return (
    <Layout>
      <Hero>Redux example!</Hero>
      <Content>Redux state example!</Content>
    </Layout>
  );
}

export default ReduxExample;