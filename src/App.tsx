import { Layout } from 'antd';
import React, { useRef, useCallback } from 'react';
import Cropper from 'react-cropper';
import 'antd/dist/antd.css';
import 'cropperjs/dist/cropper.css';
import './App.css';
import Sidebar, { previewClassName } from './Sidebar';

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
        <Cropper
          className="Cropper"
          ref={c => {
            cropper.current = c;
          }}
          src="/daiji001.jpg"
          // Cropper.js options
          preview={`.${previewClassName}`}
          dragMode="move"
          toggleDragModeOnDblclick={false}
        />
      </Content>
      <Sider width={300} className="Sider" theme="light">
        <Sidebar onAngleChange={onAngleChange}></Sidebar>
      </Sider>
    </Layout>
  );
};

export default App;
