import { Layout } from 'antd';
import React from 'react';

import Sidebar, { previewClassName } from './Sidebar';
import Canvas from './Canvas';

import styles from './App.module.css';

const { Content, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Content>
        <Canvas previewClassName={previewClassName} />
      </Content>
      <Sider width={300} className={styles.Sider} theme="light">
        <Sidebar></Sidebar>
      </Sider>
    </Layout>
  );
};

export default App;
