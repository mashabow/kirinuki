import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const DownloadButton = () => {
  const disabled = useSelector(state => !state.crops.length);

  return (
    <Button disabled={disabled} type="primary" icon="download">
      ダウンロード
    </Button>
  );
};

export default DownloadButton;
