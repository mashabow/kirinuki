import React, { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './App.css';

const App = () => {
  const cropper = useRef();

  return (
    <div className="App">
      <Cropper
        ref={cropper.current}
        src="/daiji001.jpg"
        style={{ height: '100vh', width: '80vw' }}
        // Cropper.js options
        dragMode="move"
        toggleDragModeOnDblclick={false}
      />
    </div>
  );
};

export default App;
