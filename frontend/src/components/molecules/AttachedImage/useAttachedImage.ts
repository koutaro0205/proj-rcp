import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react';

export type ImageInfo = {
  data: string | ArrayBuffer | null;
  filename: string;
};

const INITIAL_IMAGE_INFO: ImageInfo = {
  data: null,
  filename: '',
};
export const useAttachedImage = () => {
  const [imageInfo, setImageInfo] = useState<ImageInfo>(INITIAL_IMAGE_INFO);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
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

  const handleResetFile = () => {
    setFile(null);
    setImageInfo(INITIAL_IMAGE_INFO);
  };

  const isLoading = useMemo(() => {
    return file && !imageUrl;
  }, [file, imageUrl]);

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
    isLoading,
    file,
    handleFileChange,
    handleClick,
    handleResetFile,
    setFile,
  };
};
