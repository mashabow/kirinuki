import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { basename, download } from '../utils';

const DownloadButton = () => {
  const crops = useSelector(state => state.crops);
  const sourceImageFileName = useSelector(state => state.sourceImage.fileName);

  const onClick = useCallback(() => {
    const json = JSON.stringify(
      crops.map(c => c.params),
      null,
      2,
    );
    const fileName = `${basename(sourceImageFileName!)}.json`;
    download(new File([json], fileName, { type: 'application/json' }));
  }, [crops, sourceImageFileName]);

  return (
    <Button
      disabled={!crops.length}
      type="primary"
      icon="download"
      onClick={onClick}
    >
      切り抜きデータをダウンロード
    </Button>
  );
};

export default DownloadButton;
