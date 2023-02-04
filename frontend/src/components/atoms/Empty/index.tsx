import React from 'react';

import { FontSizes } from '@/theme/fontSize';

import { getStyles } from './styles';

type Props = {
  message: string;
  size?: FontSizes;
};

// FIXME: 特別な目的がない限りtextコンポーネントを使うため、削除する
const Empty: React.FC<Props> = ({ message, size = 'm' }) => {
  const styles = getStyles({ size });
  return <p className={styles.container}>{message}</p>;
};

export default Empty;
