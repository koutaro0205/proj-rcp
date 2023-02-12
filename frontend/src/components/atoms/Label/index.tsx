import React from 'react';

import { FontSizes } from '@/theme/fontSize';

import { getStyles, LabelPattern, LABEL_TEXT } from './styles';

type Props = {
  pattern: LabelPattern;
  size?: FontSizes;
};

const Label: React.FC<Props> = ({ pattern, size }) => {
  const styles = getStyles({ pattern, size });
  return <span className={styles.container}>{LABEL_TEXT[pattern]}</span>;
};

export default Label;
