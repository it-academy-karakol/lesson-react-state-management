import React from 'react';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import Content from '../../components/Content';

function StateExample(props) {
  return (
    <Layout>
      <Hero>State example!</Hero>
      <Content>Simple state example!</Content>
    </Layout>
  );
}

export default StateExample;