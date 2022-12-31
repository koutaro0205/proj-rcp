import React from 'react';

import { InnerSize, INNER_WIDTH } from '@/common/constants/flatDimention';

import { getStyles } from './styles';

type Props = {
  children: React.ReactNode;
  size?: InnerSize;
};

const InnerWrapper: React.FC<Props> = ({ children, size = 'm' }) => {
  const style = getStyles(INNER_WIDTH[size]);
  return <div className={style.container}>{children}</div>;
};

export default InnerWrapper;
