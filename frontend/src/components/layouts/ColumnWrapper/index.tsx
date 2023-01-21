import React from 'react';

import { getStyles } from './styles';

type WideWidthRatio = '62%' | '60%' | '58%' | '56%' | '54%' | '52%';
type NarrowWidthRatio = '48%' | '46%' | '44%' | '42%' | '40%' | '38%';
type MiddleWidthRatio = '50%';

type Props = {
  children: React.ReactNode;
  columnWidth: WideWidthRatio | NarrowWidthRatio | MiddleWidthRatio;
};

const ColumnWrapper = ({ children, columnWidth }: Props) => {
  const style = getStyles(columnWidth);
  return <div className={style.container}>{children}</div>;
};

export default ColumnWrapper;
