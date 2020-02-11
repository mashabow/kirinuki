import React, { useRef, useState, useCallback } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './App.css';

const App = () => {
  const cropper = useRef<Cropper | null>(null);
  const previewClassName = 'Preview';

  const [angle, setAngle] = useState(0);
  const updateAngle = useCallback(event => {
    setAngle(event.target.value);
    if (cropper.current) {
      cropper.current.rotateTo(event.target.value);
    }
  }, []);

  return (
    <div className="App">
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
      <div className="Sidebar">
        <div className={previewClassName} />
        <input
          type="range"
          min="-10"
          max="10"
          step="0.1"
          value={angle}
          onInput={updateAngle}
          onChange={updateAngle}
        />
        {angle}
      </div>
    </div>
  );
};

export default App;
