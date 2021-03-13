import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import styles from './Canvas.module.css';

interface Props {
  readonly cropperRef: React.MutableRefObject<Cropper | null>;
  readonly previews: readonly string[];
}

const Canvas = ({ cropperRef, previews }: Props) => {
  const sourceImage = useSelector(state => state.sourceImage);

  useEffect(() => {
    if (cropperRef.current) {
      cropperRef.current.rotateTo(sourceImage.angle);
    }
  }, [cropperRef, sourceImage.angle]);

  return (
    <Cropper
      className={styles.Cropper}
      ref={c => {
        cropperRef.current = c;
      }}
      src={sourceImage.url ?? undefined}
      // Cropper.js options
      autoCropArea={0.6}
      preview={previews.map(s => `.${s}`).join(', ')}
      dragMode="move"
      toggleDragModeOnDblclick={false}
    />
  );
};

export default Canvas;
