import { Icon } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearCrops } from '../features/crops';
import { close } from '../features/sourceImage';

import styles from './FileName.module.css';

const FileName = () => {
  const dispatch = useDispatch();
  const sourceImage = useSelector(state => state.sourceImage);

  const onClick = useCallback(() => {
    if (!sourceImage.url) return;
    URL.revokeObjectURL(sourceImage.url);
    dispatch(close());
    dispatch(clearCrops());
  }, [dispatch, sourceImage.url]);

  return (
    <div className={styles.FileName} onClick={onClick}>
      {sourceImage.fileName}
      <Icon className={styles.CloseIcon} type="close-circle" />
    </div>
  );
};

export default FileName;
