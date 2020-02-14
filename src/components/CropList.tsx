import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CropList.module.css';

const CropList: React.FC = () => {
  const crops = useSelector(state => state.crops);

  return (
    <div className={styles.CropList}>
      {crops.map((crop, i) => (
        <div key={i} className={styles.Crop}>
          <img className={styles.Thumbnail} src={crop.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
};

export default CropList;
