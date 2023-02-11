import React from 'react';

import { FontSizes } from '@/theme/fontSize';

import { getStyles, LabelPattern } from './styles';

type Props = {
  pattern: LabelPattern;
  text: string;
  size?: FontSizes;
};

const Label: React.FC<Props> = ({ pattern, text, size }) => {
  const styles = getStyles({ pattern, size });
  return <span className={styles.container}>{text}</span>;
};

export default Label;
