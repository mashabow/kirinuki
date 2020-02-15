import React from 'react';
import { useDropzone } from 'react-dropzone';
import { open } from '../features/sourceImage';
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
      const file = acceptedFiles[0];
      if (!acceptedFiles) return;
      const blobURL = URL.createObjectURL(file);
      dispatch(open({ fileName: file.name, url: blobURL }));
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
