import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import styles from './Canvas.module.css';

interface Props {
  readonly cropperRef: React.MutableRefObject<Cropper | null>;
  readonly previewClassName: string;
}

const Canvas = ({ cropperRef, previewClassName }: Props) => {
  const src = useSelector(state => state.sourceImage.url ?? undefined);

  const dispatch = useDispatch();
  const angle = useSelector(state => state.sourceImage.angle);
  useEffect(() => {
    if (cropperRef.current) {
      cropperRef.current.rotateTo(angle);
    }
  }, [angle, cropperRef, dispatch]);

  return (
    <Cropper
      className={styles.Cropper}
      ref={c => {
        cropperRef.current = c;
      }}
      src={src}
      // Cropper.js options
      preview={`.${previewClassName}`}
      dragMode="move"
      toggleDragModeOnDblclick={false}
    />
  );
};

export default Canvas;
