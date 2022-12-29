import React from 'react';

import { FormSize, FORM_WIDTH } from '@/common/constants/flatDimention';

import { getStyles } from './styles';

type Props = {
  children: React.ReactNode;
  formSize?: FormSize;
};

const InnerWrapper: React.FC<Props> = ({ children, formSize = 'm' }) => {
  const style = getStyles(FORM_WIDTH[formSize]);
  return <div className={style.container}>{children}</div>;
};

export default InnerWrapper;
