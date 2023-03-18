import { useEffect, useState } from 'react';

import { ImageInfo } from '@/common/types';

type Args = {
  file: File | null;
};

export const useReadFile = ({ file }: Args) => {
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');
  const [imageParams, setImageParams] = useState<ImageInfo>();

  useEffect(() => {
    if (!file) {
      return;
    }

    let reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      const res = reader && reader.result;
      if (res && typeof res === 'string') {
        setPreviewImageUrl(res);
        setImageParams({
          io: reader && reader.result,
          filename: file ? file.name : '',
        });
      }
    };
    reader.readAsDataURL(file);

    return () => {
      reader = null;
    };
  }, [file]);

  return {
    previewImageUrl,
    imageParams,
  };
};
