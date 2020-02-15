import { Icon } from 'antd';
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { clearCrops } from '../features/crops';
import { close } from '../features/sourceImage';
import styles from './Canvas.module.css';

interface Props {
  readonly cropperRef: React.MutableRefObject<Cropper | null>;
  readonly previewClassName: string;
}

const Canvas = ({ cropperRef, previewClassName }: Props) => {
  const sourceImage = useSelector(state => state.sourceImage);

  const dispatch = useDispatch();
  useEffect(() => {
    if (cropperRef.current) {
      cropperRef.current.rotateTo(sourceImage.angle);
    }
  }, [cropperRef, sourceImage.angle]);

  const onFileNameClick = useCallback(() => {
    if (!sourceImage.url) return;
    URL.revokeObjectURL(sourceImage.url);
    dispatch(close());
    dispatch(clearCrops());
  }, [dispatch, sourceImage.url]);

  return (
    <>
      <Cropper
        className={styles.Cropper}
        ref={c => {
          cropperRef.current = c;
        }}
        src={sourceImage.url ?? undefined}
        // Cropper.js options
        autoCropArea={0.2}
        preview={`.${previewClassName}`}
        dragMode="move"
        toggleDragModeOnDblclick={false}
      />
      <div className={styles.FileName} onClick={onFileNameClick}>
        {sourceImage.fileName}
        <Icon className={styles.CloseIcon} type="close-circle" />
      </div>
    </>
  );
};

export default Canvas;
