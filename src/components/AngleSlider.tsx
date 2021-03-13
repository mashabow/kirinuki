import { Slider } from 'antd';
import { SliderValue } from 'antd/lib/slider';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAngle } from '../features/sourceImage';

import styles from './AngleSlider.module.css';

const MAX_ANGLE = 10;
const MIN_ANGLE = -MAX_ANGLE;

const formatter = (angle: number) => `${angle.toFixed(1)}°`;

const AngleSlider: React.FC = () => {
  const sourceImage = useSelector(state => state.sourceImage);
  const hasImage = Boolean(sourceImage.url);

  const dispatch = useDispatch();
  const onChange = useCallback(
    (value: SliderValue) => {
      if (
        typeof value === 'number' &&
        MIN_ANGLE <= sourceImage.angle &&
        sourceImage.angle <= MAX_ANGLE
      ) {
        dispatch(setAngle(value));
      }
    },
    [dispatch, sourceImage.angle],
  );

  return (
    <Slider
      className={styles.AngleSlider}
      disabled={!hasImage}
      min={MIN_ANGLE}
      max={MAX_ANGLE}
      step={0.1}
      defaultValue={0}
      value={sourceImage.angle}
      onChange={onChange}
      tipFormatter={formatter}
      tooltipPlacement="bottom"
    />
  );
};

export default AngleSlider;
