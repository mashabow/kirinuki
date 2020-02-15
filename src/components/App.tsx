import { Layout } from 'antd';
import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import { useSelector } from 'react-redux';

import { useEnterToCrop } from '../hooks';
import Sidebar, { previewClassName } from './Sidebar';
import Canvas from './Canvas';
import FileName from './FileName';
import Dropzone from './Dropzone';
import styles from './App.module.css';

const { Content, Sider } = Layout;

const App = () => {
  const cropperRef = useRef<Cropper | null>(null);
  useEnterToCrop(cropperRef);

  const hasImage = useSelector(state => Boolean(state.sourceImage.url));

  return (
    <Layout>
      <Content className={styles.Content}>
        {hasImage ? (
          <>
            <Canvas
              cropperRef={cropperRef}
              previewClassName={previewClassName}
            />
            <FileName />
          </>
        ) : (
          <Dropzone />
        )}
      </Content>
      <Sider width={320} className={styles.Sider} theme="light">
        <Sidebar></Sidebar>
      </Sider>
    </Layout>
  );
};

export default App;
