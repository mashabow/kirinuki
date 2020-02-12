import React from 'react';
import { useDropzone } from 'react-dropzone';
import { setURL } from '../features/sourceImage';
import { useDispatch } from 'react-redux';

// import styles from './Dropzone.css';

interface Props {
  readonly children: React.ReactElement;
}

const Dropzone = ({ children }: Props) => {
  const dispatch = useDispatch();

  const { getRootProps, getInputProps } = useDropzone({
    accept: ['image/jpeg', 'image/png'],
    noClick: true,
    noKeyboard: true,
    onDrop: acceptedFiles => {
      if (acceptedFiles.length === 0) return;
      const blobURL = URL.createObjectURL(acceptedFiles[0]);
      dispatch(setURL(blobURL));
    },
  });

  // TODO: 初期状態ではメッセージを表示

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
};

export default Dropzone;
