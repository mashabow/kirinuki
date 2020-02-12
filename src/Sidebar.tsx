import { Slider } from 'antd';
import React from 'react';

import styles from './Sidebar.module.css';

export const previewClassName = styles.Preview;

const angleFormatter = (angle: number) => `${angle.toFixed(1)}°`;

interface Props {
  readonly onAngleChange: Slider['props']['onChange'];
}

const Sidebar = ({ onAngleChange }: Props) => {
  return (
    <>
      {/* プレビュー領域の高さを固定するためにはラッパーが必要 */}
      <div className={styles.PreviewWrapper}>
        <div className={styles.Preview} />
      </div>
      <Slider
        min={-10}
        max={10}
        step={0.1}
        defaultValue={0}
        onChange={onAngleChange}
        tipFormatter={angleFormatter}
        tooltipPlacement="bottom"
      />
    </>
  );
};

export default Sidebar;
