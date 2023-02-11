import React, { useCallback, useState, useEffect, useRef } from 'react';

export type ImageInfo = {
  data: string | ArrayBuffer | null;
  filename: string;
};

const INITIAL_IMAGE_INFO: ImageInfo = {
  data: null,
  filename: '',
};
export const useUploadFiles = () => {
  const [imageInfo, setImageInfo] = useState<ImageInfo>(INITIAL_IMAGE_INFO);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget?.files && event.currentTarget.files[0]) {
        setFile(event.currentTarget.files[0]);
      }
    },
    []
  );

  useEffect(() => {
    if (!file) {
      return;
    }

    let reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      const res = reader && reader.result;
      if (res && typeof res === 'string') {
        setImageUrl(res);
        setImageInfo({
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
    inputRef,
    imageInfo,
    imageUrl,
    file,
    handleFileChange,
    handleClick,
    setFile,
  };
};
