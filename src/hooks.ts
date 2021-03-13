import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { addCrop } from './features/crops';
import { rotate } from './features/sourceImage';

export const useKeyBindings = (
  cropperRef: React.MutableRefObject<Cropper | null>,
  thumbnailPreviewClassName: string,
): void => {
  const dispatch = useDispatch();

  const handler = useCallback(
    (event: KeyboardEvent) => {
      const cropper = cropperRef.current;
      if (!cropper) return;

      switch (`${event.metaKey ? '⌘' : ''}${event.key}`) {
        // 画像移動
        case 'ArrowLeft':
          cropper.move(-1, 0);
          break;
        case 'ArrowRight':
          cropper.move(1, 0);
          break;
        case 'ArrowUp':
          cropper.move(0, -1);
          break;
        case 'ArrowDown':
          cropper.move(0, 1);
          break;

        // 画像回転
        case 'z':
          dispatch(rotate(-0.1));
          break;
        case 'x':
          dispatch(rotate(0.1));
          break;
        case 'Z':
          dispatch(rotate(-90));
          break;
        case 'X':
          dispatch(rotate(90));
          break;

        // 範囲拡大・縮小
        case '⌘ArrowLeft':
          cropper.setCropBoxData({
            width: cropper.getCropBoxData().width - 1,
          });
          break;
        case '⌘ArrowRight':
          cropper.setCropBoxData({
            width: cropper.getCropBoxData().width + 1,
          });
          break;
        case '⌘ArrowUp':
          cropper.setCropBoxData({
            height: cropper.getCropBoxData().height - 1,
          });
          break;
        case '⌘ArrowDown':
          cropper.setCropBoxData({
            height: cropper.getCropBoxData().height + 1,
          });
          break;

        // 切り抜き
        case 'Enter': {
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
          break;
        }
        default:
          return;
      }
      event.preventDefault();
    },
    [cropperRef, dispatch, thumbnailPreviewClassName],
  );

  useEffect(() => {
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handler]);
};
