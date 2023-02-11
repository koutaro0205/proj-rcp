import React from 'react';

import { getStyles } from './styles';
import { FileType, useDropzone } from './useDropzone';

type Props = {
  // 入力ファイル
  value?: File[];
  // <input />のname属性
  name?: string;
  // 許可されるファイルタイプ
  acceptedFileTypes?: FileType[];
  // 横幅
  width?: number | string;
  // 縦幅
  height?: number | string;
  // バリデーションエラーフラグ
  hasError?: boolean;
  // ファイルがドロップ入力された時のイベントハンドラ
  onDrop?: (files: File[]) => void;
  // ファイルが入力された時のイベントハンドラ
  onChange?: (files?: File[]) => void;
};

/**
 * ドロップゾーン
 * ファイルの入力を受け付ける
 */
const Dropzone: React.FC<Props> = ({
  onDrop,
  onChange,
  value = [],
  name,
  acceptedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
  hasError,
  width = '100%',
  height = '200px',
}) => {
  const {
    rootRef,
    inputRef,
    isFocused,
    handleChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleDragEnter,
    handleClick,
  } = useDropzone({ onDrop, onChange, value, acceptedFileTypes });

  const styles = getStyles({ isFocused, hasError, width, height });

  return (
    <div
      className={styles.container}
      ref={rootRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragEnter={handleDragEnter}
      onClick={handleClick}
      data-testid="dropzone"
      role="presentation"
    >
      {/* ダミーインプット */}
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        name={name}
        accept={acceptedFileTypes.join(',')}
        onChange={handleChange}
        multiple
      />
      <div className={styles.content}>
        {/* アイコン */}
        <span style={{ textAlign: 'center' }}>デバイスからアップロード</span>
      </div>
    </div>
  );
};

export default Dropzone;
