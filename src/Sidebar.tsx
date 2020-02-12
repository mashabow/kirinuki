import { Slider } from 'antd';
import { SliderValue } from 'antd/lib/slider';
import React, { useCallback } from 'react';

import styles from './Sidebar.module.css';
import { useDispatch } from 'react-redux';
import { setAngle } from './redux';

export const previewClassName = styles.Preview;

const angleFormatter = (angle: number) => `${angle.toFixed(1)}°`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const onAngleChange = useCallback(
    (value: SliderValue) => {
      if (typeof value === 'number') {
        dispatch(setAngle(value));
      }
    },
    [dispatch],
  );

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
