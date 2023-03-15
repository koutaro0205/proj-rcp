import React from 'react';

import { getStyle, TitleSize, TitleColor } from './styles';

export type Props = {
  children: string;
  color?: TitleColor;
  size?: TitleSize | TitleSize[];
};

const Title: React.FC<Props> = ({
  children,
  color = 'baseColor',
  size = 'l',
}) => {
  const styles = getStyle({ color, size });

  return <h1 className={styles}>{children}</h1>;
};

export default Title;
