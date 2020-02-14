import classnames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CropList.module.css';
import { Icon } from 'antd';

interface Props {
  readonly className?: string;
}

const CropList: React.FC<Props> = ({ className }) => {
  const crops = useSelector(state => state.crops);

  return (
    <div className={classnames(className, styles.CropList)}>
      {crops.map((crop, i) => (
        <div key={i} className={styles.Crop}>
          <img className={styles.Thumbnail} src={crop.thumbnail} alt="" />
          <Icon className={styles.DeleteIcon} type="delete" />
        </div>
      ))}
    </div>
  );
};

export default CropList;
