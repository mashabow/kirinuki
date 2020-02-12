import { Layout, Slider } from 'antd';
import React, { useRef, useState, useCallback } from 'react';
import Cropper from 'react-cropper';
import 'antd/dist/antd.css';
import 'cropperjs/dist/cropper.css';
import './App.css';

const { Content, Sider } = Layout;

const App = () => {
  const cropper = useRef<Cropper | null>(null);
  const previewClassName = 'Preview';

  const [angle, setAngle] = useState(0);
  const updateAngle = useCallback(value => {
    setAngle(value);
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
        <div className={previewClassName} />
        <Slider
          min={-10}
          max={10}
          step={0.1}
          value={angle}
          onChange={updateAngle}
        />
      </Sider>
    </Layout>
  );
};

export default App;
