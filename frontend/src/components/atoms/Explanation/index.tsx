import React from 'react';

import { LineHeights } from '@/theme/lineHeights';

import { getStyles } from './styles';

type Props = {
  message: string;
  lineHeight?: LineHeights;
};

const Explanation: React.FC<Props> = ({ message, lineHeight = 'm' }) => {
  const style = getStyles({ lineHeight });
  return <p className={style.message}>{message}</p>;
};

export default Explanation;
