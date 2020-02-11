import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './App.css';

const App = () => {
  const cropper = useRef();
  const previewClassName = 'Preview';

  return (
    <div className="App">
      <Cropper
        className="Cropper"
        ref={cropper.current}
        src="/daiji001.jpg"
        // Cropper.js options
        preview={`.${previewClassName}`}
        dragMode="move"
        toggleDragModeOnDblclick={false}
      />
      <div className="Sidebar">
        <div className={previewClassName} />
      </div>
    </div>
  );
};

export default App;
