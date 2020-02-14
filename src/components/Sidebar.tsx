import React from 'react';

import CropList from './CropList';
import AngleSlider from './AngleSlider';
import styles from './Sidebar.module.css';

export const previewClassName = styles.Preview;

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <AngleSlider />
      {/* プレビュー領域の高さを固定するためにはラッパーが必要 */}
      <div className={styles.PreviewWrapper}>
        <div className={styles.Preview} />
      </div>
      <CropList className={styles.CropList} />
    </div>
  );
};

export default Sidebar;
