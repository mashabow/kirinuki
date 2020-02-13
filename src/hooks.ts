import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addCrop } from './features/crops';

export const useEnterToCrop = (
  cropperRef: React.MutableRefObject<Cropper | null>,
): void => {
  const dispatch = useDispatch();
  const handler = useCallback(
    async (event: KeyboardEvent) => {
      const cropper = cropperRef.current;
      if (cropper && event.key === 'Enter') {
        const { x, y, width, height, rotate } = cropper.getData();
        const canvas = cropper.getCroppedCanvas({
          width: 100,
          height: 100,
          maxWidth: 100,
          maxHeight: 100,
        });
        const blob = await new Promise(resolve => canvas.toBlob(resolve));

        dispatch(
          addCrop({
            params: { x, y, width, height, rotate },
            thumbnail: URL.createObjectURL(blob),
          }),
        );
      }
    },
    [cropperRef, dispatch],
  );

  useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handler]);
};
