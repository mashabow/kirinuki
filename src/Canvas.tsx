import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import styles from './Canvas.module.css';

interface Props {
  readonly previewClassName: string;
  readonly cropperRef: React.MutableRefObject<Cropper | null>;
}

const Canvas = ({ previewClassName, cropperRef }: Props) => {
  return (
    <Cropper
      className={styles.Cropper}
      ref={c => {
        cropperRef.current = c;
      }}
      src="/daiji001.jpg"
      // Cropper.js options
      preview={`.${previewClassName}`}
      dragMode="move"
      toggleDragModeOnDblclick={false}
    />
  );
};

export default Canvas;
