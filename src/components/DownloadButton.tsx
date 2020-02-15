import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { download } from '../utils';

const DownloadButton = () => {
  const crops = useSelector(state => state.crops);

  const onClick = useCallback(() => {
    const json = JSON.stringify(crops, null, 2);
    const file = new File([json], 'out.json', { type: 'application/json' });
    download(file);
  }, [crops]);

  return (
    <Button
      disabled={!crops.length}
      type="primary"
      icon="download"
      onClick={onClick}
    >
      ダウンロード
    </Button>
  );
};

export default DownloadButton;
