import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addCrop } from './features/crops';

export const useEnterToCrop = (
  cropperRef: React.MutableRefObject<Cropper | null>,
  thumbnailPreviewClassName: string,
): void => {
  const dispatch = useDispatch();
  const handler = useCallback(
    (event: KeyboardEvent) => {
      const cropper = cropperRef.current;
      if (!(cropper && event.key === 'Enter')) return;
      const { x, y, width, height, rotate } = cropper.getData();

      // 本来であれば cropper.getCropedCanvas() で画像データを直に取得したいところだが、
      // soruceImage のサイズが大きすぎると、NS_ERROR_FAILURE というエラーが出るなどして、
      // 取得に失敗することがある。
      // そこで、サムネイルと同じ大きさのダミーのプレビュー thumbnailPreviewClassName を用意して、
      // crop 時にそのスタイルを取得し、サムネイル表示に利用するようにする。
      const divStyle = document.querySelector<HTMLDivElement>(
        `.${thumbnailPreviewClassName}`,
      )!.style;
      const imgStyle = document.querySelector<HTMLImageElement>(
        `.${thumbnailPreviewClassName}>img`,
      )!.style;

      dispatch(
        addCrop({
          params: { x, y, width, height, rotate },
          divStyle: {
            width: divStyle.width,
            height: divStyle.height,
          },
          imgStyle: {
            width: imgStyle.width,
            height: imgStyle.height,
            transform: imgStyle.transform,
          },
        }),
      );
    },
    [cropperRef, dispatch, thumbnailPreviewClassName],
  );

  useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handler]);
};
