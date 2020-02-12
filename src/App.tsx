import { Layout } from 'antd';
import React, { useRef, useCallback } from 'react';
import Cropper from 'react-cropper';

import Sidebar, { previewClassName } from './Sidebar';
import Canvas from './Canvas';

import styles from './App.module.css';

const { Content, Sider } = Layout;

const App = () => {
  const cropper = useRef<Cropper | null>(null);
  const onAngleChange = useCallback(value => {
    if (cropper.current) {
      cropper.current.rotateTo(value);
    }
  }, []);

  return (
    <Layout>
      <Content>
        <Canvas previewClassName={previewClassName} cropperRef={cropper} />
      </Content>
      <Sider width={300} className={styles.Sider} theme="light">
        <Sidebar onAngleChange={onAngleChange}></Sidebar>
      </Sider>
    </Layout>
  );
};

export default App;
