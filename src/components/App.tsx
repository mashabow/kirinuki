import { Layout } from 'antd';
import React, { useRef } from 'react';
import Cropper from 'react-cropper';

import { useEnterToCrop } from '../hooks';
import Sidebar, { previewClassName } from './Sidebar';
import Canvas from './Canvas';
import Dropzone from './Dropzone';
import styles from './App.module.css';

const { Content, Sider } = Layout;

const App = () => {
  const cropperRef = useRef<Cropper | null>(null);
  useEnterToCrop(cropperRef);

  return (
    <Layout>
      <Content>
        <Dropzone>
          <Canvas cropperRef={cropperRef} previewClassName={previewClassName} />
        </Dropzone>
      </Content>
      <Sider width={300} className={styles.Sider} theme="light">
        <Sidebar></Sidebar>
      </Sider>
    </Layout>
  );
};

export default App;
