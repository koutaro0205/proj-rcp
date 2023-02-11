import { useCallback, useEffect, useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDragEvent = (value: any): value is React.DragEvent => {
  return !!value.dataTransfer;
};

export const isInput = (
  value: EventTarget | null
): value is HTMLInputElement => {
  return value !== null;
};

/**
 * イベントから入力されたファイルを取得
 * @param e DragEventかChangeEvent
 * @returns Fileの配列
 */
export const getFilesFromEvent = (
  e: React.DragEvent | React.ChangeEvent
): File[] => {
  if (isDragEvent(e)) {
    return Array.from(e.dataTransfer.files);
  }
  if (isInput(e.target) && e.target.files) {
    return Array.from(e.target.files);
  }

  return [];
};

// ファイルのContent-Type
export type FileType =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/gif'
  | 'video/mp4'
  | 'video/quicktime'
  | 'application/pdf';

type Args = {
  value?: File[];
  acceptedFileTypes?: FileType[];
  onDrop?: (files: File[]) => void;
  onChange?: (files?: File[]) => void;
};

export const useDropzone = ({
  onDrop,
  onChange,
  value = [],
  acceptedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
}: Args) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);

    const files = value.concat(
      getFilesFromEvent(e).filter((f) =>
        acceptedFileTypes.includes(f.type as FileType)
      )
    );

    if (onDrop) onDrop(files);
    if (onChange) onChange(files);
  };

  // ドラッグ状態のマウスポインタが範囲内でドロップされた時
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);

    const files = value.concat(
      getFilesFromEvent(e).filter((f) =>
        acceptedFileTypes.includes(f.type as FileType)
      )
    );

    if (files.length === 0) {
      // eslint-disable-next-line no-alert
      return window.alert(
        `次のファイルフォーマットは指定できません${acceptedFileTypes.join(
          ' ,'
        )})`
      );
    }

    if (onDrop) onDrop(files);
    if (onChange) onChange(files);
  };

  // ドラッグ状態のマウスポインタが範囲内入っている時
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // ドラッグ状態のマウスポインタが範囲外に消えた時にフォーカスを外す
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);
  }, []);

  // ドラッグ状態のマウスポインタが範囲内に来た時にフォーカスを当てる
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(true);
  }, []);

  // ファイル選択ダイアログを表示する
  const handleClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (inputRef.current && value && value.length === 0) {
      inputRef.current.value = '';
    }
  }, [value]);

  return {
    rootRef,
    inputRef,
    isFocused,
    handleChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleDragEnter,
    handleClick,
  };
};
