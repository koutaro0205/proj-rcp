import React from 'react';

import { getStyles } from './styles';

type Props = {
  children: React.ReactNode;
  columnWidth: string;
};

const ColumnWrapper = ({ children, columnWidth }: Props) => {
  const style = getStyles(columnWidth);
  return <div className={style.container}>{children}</div>;
};

export default ColumnWrapper;
