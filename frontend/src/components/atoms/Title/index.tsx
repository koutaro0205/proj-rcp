import React from 'react';

import { getStyle, TitleSize, TitleColor } from './styles';

export type Props = {
  children: string;
  color?: TitleColor;
  size?: TitleSize | TitleSize[];
  isCenter?: boolean;
};

const Title: React.FC<Props> = ({
  children,
  color = 'baseColor',
  size = 'l',
  isCenter = false,
}) => {
  const styles = getStyle({ color, size, isCenter });

  return <h1 className={styles}>{children}</h1>;
};

export default Title;
