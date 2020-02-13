import React from 'react';
import { useDropzone } from 'react-dropzone';
import { setURL } from '../features/sourceImage';
import { useDispatch, useSelector } from 'react-redux';
import { Empty, Icon } from 'antd';

import styles from './Dropzone.module.css';

interface Props {
  readonly children: React.ReactElement;
}

const Dropzone = ({ children }: Props) => {
  const hasImage = useSelector(state => Boolean(state.sourceImage.url));

  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    accept: ['image/jpeg', 'image/png'],
    noClick: hasImage,
    noKeyboard: true,
    onDrop: acceptedFiles => {
      if (acceptedFiles.length === 0) return;
      const blobURL = URL.createObjectURL(acceptedFiles[0]);
      dispatch(setURL(blobURL));
    },
  });

  return (
    <div className={styles.Root} {...getRootProps()}>
      <input {...getInputProps()} />
      {hasImage ? (
        children
      ) : (
        <Empty
          className={styles.Empty}
          image={<Icon type="file-image" className={styles.Icon} />}
          description="ここをクリック or ドロップして画像を開く"
        />
      )}
    </div>
  );
};

export default Dropzone;
