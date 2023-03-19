import NextImage, { ImageProps } from 'next/image';
import React from 'react';

import { getStyles } from './styles';

/*
next/imageでサイズがわからない画像をいい感じに表示できるコンポーネント
*/

type Props = {
  imageHeight?: string | number;
} & ImageProps;

const Image: React.FC<Props> = ({ imageHeight = '100%', ...props }) => {
  const styles = getStyles(imageHeight);
  return (
    <div className={styles.container}>
      <NextImage className={styles.image} layout="fill" {...props} />
    </div>
  );
};

export default Image;
