import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import styles from './Canvas.module.css';

interface Props {
  readonly previewClassName: string;
}

const Canvas = ({ previewClassName }: Props) => {
  const cropper = useRef<Cropper | null>(null);
  const angle = useSelector(state => state.crop.angle);
  useEffect(() => {
    if (cropper.current) {
      cropper.current.rotateTo(angle);
    }
  }, [angle]);

  return (
    <Cropper
      className={styles.Cropper}
      ref={c => {
        cropper.current = c;
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
