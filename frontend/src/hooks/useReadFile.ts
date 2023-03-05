import { useEffect, useState } from 'react';

type ImageParams = {
  data: string | ArrayBuffer | null;
  filename: string;
};

type Args = {
  file: File | null;
};

export const useReadFile = ({ file }: Args) => {
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');
  const [imageParams, setImageParams] = useState<ImageParams>();

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
          data: reader && reader.result,
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
