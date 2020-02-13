import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CropList.module.css';

const CropList: React.FC = () => {
  const crops = useSelector(state => state.crops);

  return (
    <>
      {crops.map((crop, i) => (
        <img className={styles.Thumbnail} key={i} src={crop.thumbnail} alt="" />
      ))}
    </>
  );
};

export default CropList;
