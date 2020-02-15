import { Icon, Modal } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearCrops } from '../features/crops';
import { close } from '../features/sourceImage';

import styles from './FileName.module.css';

const { confirm } = Modal;

const FileName = () => {
  const dispatch = useDispatch();
  const sourceImage = useSelector(state => state.sourceImage);

  const closeSourceImage = useCallback(() => {
    if (!sourceImage.url) return;
    URL.revokeObjectURL(sourceImage.url);
    dispatch(close());
    dispatch(clearCrops());
  }, [dispatch, sourceImage.url]);

  const hasCrop = useSelector(state => state.crops.length > 0);
  const onClick = useCallback(
    () =>
      hasCrop
        ? confirm({
            title: '画像を閉じてもよろしいですか？',
            content: '切り抜きデータは破棄されます。',
            okType: 'danger',
            onOk: closeSourceImage,
            okText: 'OK',
            cancelText: 'キャンセル',
            centered: true,
          })
        : closeSourceImage(),
    [closeSourceImage, hasCrop],
  );

  return (
    <div className={styles.FileName} onClick={onClick}>
      {sourceImage.fileName}
      <Icon className={styles.CloseIcon} type="close-circle" />
    </div>
  );
};

export default FileName;
