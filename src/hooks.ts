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
          // サムネイルで表示する領域の数倍のサイズにしておかないと、画質が落ちてしまう
          width: 300,
          height: 300,
        });
        const blob = await new Promise(resolve =>
          canvas.toBlob(resolve, 'image/jpeg', 0.7),
        );
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
