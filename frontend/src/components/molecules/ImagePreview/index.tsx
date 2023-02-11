import React from 'react';

import { getStyles } from './styles';

// イメージプレビューコンポーネントで受け取るpropsの型（プロパティ）
type Props = {
  /**
   * 画像URL
   */
  src?: string;
  /**
   * 代替テキスト
   */
  alt?: string;
  /**
   * 縦幅
   */
  height?: string;
  /**
   * 横幅
   */
  width?: string;
  /**
   * 削除ボタンを押した時のイベントハンドラ
   */
  onRemove?: (src: string) => void;
};

/**
 * イメージプレビュー
 */
const ImagePreview: React.FC<Props> = ({
  src,
  alt,
  height,
  width,
  onRemove,
}) => {
  const styles = getStyles();
  // 閉じるボタンを押したらonRemoveを呼ぶ
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRemove && src) {
      onRemove(src);
    }

    return false;
  };

  return (
    <div className={styles.closeButtonWrapper}>
      <img src={src} alt={alt} height={height} width={width} />
      <div
        className={styles.container}
        onClick={handleCloseClick}
        role="presentation"
      >
        ICON
      </div>
    </div>
  );
};

export default ImagePreview;
