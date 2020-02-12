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
      <div className={styles.Preview} />
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
