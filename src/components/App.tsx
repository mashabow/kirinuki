import { Layout } from 'antd';
import React from 'react';

import Sidebar, { previewClassName } from './Sidebar';
import Canvas from './Canvas';

import styles from './App.module.css';
import Dropzone from './Dropzone';

const { Content, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Content>
        <Dropzone>
          <Canvas previewClassName={previewClassName} />
        </Dropzone>
      </Content>
      <Sider width={300} className={styles.Sider} theme="light">
        <Sidebar></Sidebar>
      </Sider>
    </Layout>
  );
};

export default App;
