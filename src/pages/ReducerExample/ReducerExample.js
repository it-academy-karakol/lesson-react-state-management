import React from 'react';

import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import Content from '../../components/Content';


function ReducerExample(props) {
  return (
    <Layout>
      <Hero>Reducer example!</Hero>
      <Content>Reducer state example!</Content>
    </Layout>
  );
}

export default ReducerExample;