import classnames from 'classnames';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CropList.module.css';
import { Icon } from 'antd';
import { deleteCrop } from '../features/crops';

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

  return (
    <div className={classnames(className, styles.CropList)}>
      {crops.map((crop, i) => (
        <div key={i} className={styles.Crop}>
          <img className={styles.Thumbnail} src={crop.thumbnail} alt="" />
          <Icon
            className={styles.DeleteIcon}
            type="delete"
            onClick={onDeleteIconClick(i)}
          />
        </div>
      ))}
    </div>
  );
};

export default CropList;
