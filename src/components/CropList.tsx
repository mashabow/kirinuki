import { Icon } from 'antd';
import classnames from 'classnames';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteCrop } from '../features/crops';
import styles from './CropList.module.css';

export const thumbnailPreviewClassName = styles.ThumbnailPreview;

interface Props {
  readonly className?: string;
}

const CropList: React.FC<Props> = ({ className }) => {
  const crops = useSelector(state => state.crops);

  const dispatch = useDispatch();
  const onDeleteIconClick = useCallback(
    (index: number) => () => {
      dispatch(deleteCrop(index));
    },
    [dispatch],
  );

  const src = useSelector(state => state.sourceImage.url ?? undefined);

  return (
    <div className={classnames(className, styles.CropList)}>
      {crops.map((crop, i) => (
        <div key={i} className={styles.Crop}>
          <div className={styles.Thumbnail} style={crop.divStyle}>
            <img src={src} alt={`切り抜き ${i + 1}`} style={crop.imgStyle} />
          </div>
          <Icon
            className={styles.DeleteIcon}
            type="delete"
            onClick={onDeleteIconClick(i)}
          />
        </div>
      ))}
      {/* サムネイル表示用スタイルを取得するための、ダミーの要素 */}
      <div className={classnames(styles.Crop, styles.CropPreview)}>
        <div
          className={classnames(styles.Thumbnail, thumbnailPreviewClassName)}
        />
      </div>
    </div>
  );
};

export default CropList;
