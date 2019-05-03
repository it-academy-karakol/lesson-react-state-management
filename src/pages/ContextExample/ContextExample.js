import React from 'react';

import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import Content from '../../components/Content';

function ContextExample(props) {
  return (
    <Layout>
      <Hero>Context example!</Hero>
      <Content>Context state example!</Content>
    </Layout>
  );
}

export default ContextExample;