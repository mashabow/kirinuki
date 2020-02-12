import React from 'react';
import { useDropzone } from 'react-dropzone';

// import styles from './Dropzone.css';

interface Props {
  readonly children: React.ReactElement;
}

const Dropzone = ({ children }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: ['image/jpeg', 'image/png'],
    noClick: true,
    noKeyboard: true,
  });

  // TOOD: ドロップ時の処理
  // TODO: 初期状態ではメッセージを表示

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
};

export default Dropzone;
