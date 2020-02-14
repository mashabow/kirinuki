import { Slider } from 'antd';
import { SliderValue } from 'antd/lib/slider';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setAngle } from '../features/sourceImage';

import styles from './AngleSlider.module.css';

const formatter = (angle: number) => `${angle.toFixed(1)}°`;

const AngleSlider: React.FC = () => {
  const dispatch = useDispatch();
  const onChange = useCallback(
    (value: SliderValue) => {
      if (typeof value === 'number') {
        dispatch(setAngle(value));
      }
    },
    [dispatch],
  );

  return (
    <Slider
      className={styles.AngleSlider}
      min={-10}
      max={10}
      step={0.1}
      defaultValue={0}
      onChange={onChange}
      tipFormatter={formatter}
      tooltipPlacement="bottom"
    />
  );
};

export default AngleSlider;
